package com.springjwt.controllers;

import com.springjwt.entities.movie;
import com.springjwt.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/movies")
    public List<movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/search")
    public List<movie> searchMovies(@RequestParam String searchTerm) {
        return movieService.searchMovies(searchTerm);
    }
}
