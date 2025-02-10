package com.crgtask.app.factory;

import com.crgtask.app.entities.Category;
import com.crgtask.app.entities.Task;

public class TaskFactory {

    public static Task createTask() {
        Category category = CategoryFactory.createCategory();
        Task task = new Task(1L, "Estudar inglês", "Praticar conversação em inglês, e estudar vocabulário");
        task.getCategories().add(category);
        return task;
    }

    public static Task createTask(String title) {
        Task task = createTask();
        task.setTitle(title);
        return task;
    }
}