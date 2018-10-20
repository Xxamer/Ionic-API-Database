package com.christian.movies.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.christian.movies.entity.models.Movies;

public interface IMovieDao extends CrudRepository<Movies, Long> {

	List<Movies> findByGenre(String genre);
}
