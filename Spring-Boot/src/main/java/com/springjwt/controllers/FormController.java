package com.springjwt.controllers;

import com.springjwt.entities.FormData;
import com.springjwt.repositories.FormDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class FormController {
@Autowired
private FormDataRepository formDataRepository;

    @PostMapping("/users")
    public FormData submitForm(@RequestBody FormData formData) {
        return formDataRepository.save(formData);
    }

    @GetMapping("/formdata")
    public List<FormData> getFormData() {
        return formDataRepository.findAll();
    }
}
