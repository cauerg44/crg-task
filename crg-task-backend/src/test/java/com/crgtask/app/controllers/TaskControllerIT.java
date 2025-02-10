package com.crgtask.app.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.crgtask.app.dto.CategoryDTO;
import com.crgtask.app.dto.TaskDTO;
import com.crgtask.app.entities.Category;
import com.crgtask.app.entities.Task;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class TaskControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private long existingTaskId, nonExistingTaskId;
    private String taskTitle;

    private Task task;
    private TaskDTO taskDTO;

    @BeforeEach
    void setUp() throws Exception {

        taskTitle = "Estudar Spring e React";

        existingTaskId = 7L;
        nonExistingTaskId = 404L;

        Category category = new Category(5L, null);
        task = new Task(null, "Arrumar meu setup", "Organizar meu setup para eu começar a trabalhar de home-office");
        task.getCategories().add(category);
        taskDTO = new TaskDTO(task);
    }

    @Test
    public void findAllShouldReturnListOfTaskDTO() throws Exception {

        ResultActions result =
                        mockMvc.perform(get("/tasks")
                                .accept(MediaType.APPLICATION_JSON))
                                .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.[0].id").value(1L));
        result.andExpect(jsonPath("$.[0].title").value("Estudar ReactJS"));
        result.andExpect(jsonPath("$.[0].description").value("Aprender sobre Context API e estado global"));
    }

    @Test
    public void findByIdShouldReturnTaskDTOWhenIdExists() throws Exception {

        ResultActions result =
                mockMvc.perform(get("/tasks/{id}", existingTaskId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.id").value(7L));
        result.andExpect(jsonPath("$.title").value("Entregar o projeto pronto"));
        result.andExpect(jsonPath("$.description").value("Entregar meu projeto full stack pronto para eu ser aprovado"));
        result.andExpect(jsonPath("$.categories").exists());
    }

    @Test
    public void findByIdShouldReturnTaskDTOWhenIdDoesNotExists() throws Exception {

        ResultActions result =
                mockMvc.perform(get("/tasks/{id}", nonExistingTaskId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isNotFound());
    }

    @Test
    public void insertShouldReturnTaskDTOCreated() throws Exception {

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(post("/tasks")
                                .content(jsonBody)
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                                .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isCreated());
        result.andExpect(jsonPath("$.id").value(9L));
        result.andExpect(jsonPath("$.name").value("Arrumar meu setup"));
        result.andExpect(jsonPath("$.description").value("Organizar meu setup para eu começar a trabalhar de home-office"));
        result.andExpect(jsonPath("$.categories[0].id").value(1L));
        result.andExpect(jsonPath("$.categories[1].id").value(3L));
    }
}