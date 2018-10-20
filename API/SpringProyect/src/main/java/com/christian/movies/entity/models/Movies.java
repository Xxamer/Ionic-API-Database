package com.christian.movies.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8100","*"})
@Entity
@Table(name = "movies")
public class Movies implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private String genre;
	
	private String description;
	@NotNull
	private int release_date;
	public Movies() {
	}
	public Movies(@NotEmpty String name, @NotEmpty String genre, @NotEmpty String description,
			@NotNull int release_date) {
		super();
		this.name = name;
		this.genre = genre;
		this.description = description;
		this.release_date = release_date;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRelease_date() {
		return release_date;
	}
	public void setRelease_date(int release_date) {
		this.release_date = release_date;
	}
	
	


}
