package com.christian.movies.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.christian.movies.entity.models.Movies;
import com.christian.movies.entity.services.IMovieService;


@CrossOrigin (origins = "*")
@RestController

public class MovieController {
	
	@Autowired
	IMovieService movieService;

	@GetMapping("/allmovies") // This will return all movies in the database
	public List<Movies> getAllBicycles() {
		return movieService.getAll();
	}
	
	@GetMapping("/moviesID/{id}")
	public Movies getOne(@PathVariable(value = "id") long id) {
		return movieService.get(id);
	}

	@GetMapping("/moviename/{genre}")
	public List<Movies> getOne(@PathVariable(value = "genre") String genre) {
		return movieService.getEvry(genre);
	}

	@PostMapping("/addmovie")
	public void add(Movies movies) {
		movieService.post(movies);
	}

	@PutMapping("/updatemovie/{id}")
	public void update(Movies movies, @PathVariable(value = "id") long id) {
		movieService.put(movies, id);
	}

	@DeleteMapping("/deletemovie/{id}")
	public void update(@PathVariable(value = "id") long id) {
		movieService.delete(id);
	}
	
}
