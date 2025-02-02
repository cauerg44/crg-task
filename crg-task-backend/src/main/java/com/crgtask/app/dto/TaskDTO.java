package com.crgtask.app.dto;

import com.crgtask.app.entities.Category;
import com.crgtask.app.entities.Task;

import java.util.List;
import java.util.ArrayList;

public class TaskDTO {

    private Long id;
    private String title;
    private String description;

    private List<CategoryDTO> categories = new ArrayList<>();

    public TaskDTO(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public TaskDTO(Task entity) {
        id = entity.getId();
        title = entity.getTitle();
        description = entity.getDescription();
        for (Category cat : entity.getCategories()) {
            categories.add(new CategoryDTO(cat));
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<CategoryDTO> getCategories() {
        return categories;
    }
}