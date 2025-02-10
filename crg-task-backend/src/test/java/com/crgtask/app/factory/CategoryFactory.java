package com.crgtask.app.factory;

import com.crgtask.app.entities.Category;

public class CategoryFactory {

    public static Category createCategory() {
        return new Category(1L, "Comércio");
    }

    public static Category createCategory(Long id, String name) {
        return new Category(id, name);
    }
}
