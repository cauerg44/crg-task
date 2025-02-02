package com.crgtask.app.services;

import com.crgtask.app.dto.CategoryDTO;
import com.crgtask.app.entities.Category;
import com.crgtask.app.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Transactional
    public List<CategoryDTO> findAll() {
        List<Category> list = repository.findAll();
        return list.stream().map(CategoryDTO::new).collect(Collectors.toList());
    }
}
