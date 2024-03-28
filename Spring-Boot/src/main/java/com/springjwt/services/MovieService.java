package com.springjwt.services;

import com.springjwt.entities.movie;
import com.springjwt.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<movie> searchMovies(String searchTerm) {
        return movieRepository.findByNameContainingIgnoreCase(searchTerm);
    }

    public List<movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
