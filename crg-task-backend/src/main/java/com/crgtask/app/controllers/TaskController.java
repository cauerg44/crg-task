package com.crgtask.app.controllers;

import com.crgtask.app.dto.TaskDTO;
import com.crgtask.app.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/tasks")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping
    public ResponseEntity<List<TaskDTO>> findAll() {
        List<TaskDTO> list = service.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TaskDTO> findById(@PathVariable Long id) {
        TaskDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }
}
