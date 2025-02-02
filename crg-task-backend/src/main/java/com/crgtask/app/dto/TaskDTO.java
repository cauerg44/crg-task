package com.crgtask.app.dto;

import com.crgtask.app.entities.Category;
import com.crgtask.app.entities.Task;

import java.util.ArrayList;
import java.util.List;

public class TaskDTO {

    private Long id;
    private String title;
    private String description;

    private List<CategoryDTO> categories = new ArrayList<>();

    public TaskDTO() {
    }

    public TaskDTO(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public TaskDTO(Task entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.description = entity.getDescription();
        for (Category cat : entity.getCategories()) {
            categories.add(new CategoryDTO(cat));
        }
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<CategoryDTO> getCategories() {
        return categories;
    }
}