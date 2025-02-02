package com.crgtask.app.services;

import com.crgtask.app.dto.CategoryDTO;
import com.crgtask.app.dto.TaskDTO;
import com.crgtask.app.entities.Category;
import com.crgtask.app.entities.Task;
import com.crgtask.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    @Transactional(readOnly = true)
    public List<TaskDTO> findAll() {
        List<Task> result = repository.findAll();
        return result.stream().map(TaskDTO::new).toList();
    }
}
