package com.christian.movies.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.movies.entity.dao.IMovieDao;
import com.christian.movies.entity.models.Movies;

@Service
public class MovieServiceImplement implements IMovieService {
	@Autowired
	private IMovieDao MovieDao;

	@Override
	public Movies get(long id) {
		return MovieDao.findById(id).get();
	}

	@Override
	public List<Movies> getAll() {
		return (List<Movies>) MovieDao.findAll();
	}

	@Override
	public void post(Movies movies) {
		MovieDao.save(movies);

	}

	@Override
	public void put(Movies movies, long id) {
		MovieDao.findById(id).ifPresent((x) -> {
			movies.setId(id);
			MovieDao.save(movies);
		});

	}

	@Override
	public void delete(long id) {
		MovieDao.deleteById(id);

	}

	@Override
	public List<Movies> getEvry(String genre) {
		return (List<Movies>) MovieDao.findByGenre(genre);
	}

}
