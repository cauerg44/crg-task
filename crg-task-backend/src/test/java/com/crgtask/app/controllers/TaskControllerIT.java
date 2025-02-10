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

        Category cat1 = new Category(1L, null);
        Category cat2 = new Category(3L, null);
        task = new Task(null, "Arrumar meu setup", "Organizar meu setup para eu começar a trabalhar de home-office");
        task.getCategories().add(cat1);
        task.getCategories().add(cat2);
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
        result.andExpect(jsonPath("$.title").value("Arrumar meu setup"));
        result.andExpect(jsonPath("$.description").value("Organizar meu setup para eu começar a trabalhar de home-office"));
        result.andExpect(jsonPath("$.categories[0].id").value(1L));
        result.andExpect(jsonPath("$.categories[1].id").value(3L));
    }

    @Test
    public void insertShouldReturnUnprocessableEntityWhenTitleIsInvalid() throws Exception {

        task.setTitle("ab");
        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(post("/tasks")
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void insertShouldReturnUnprocessableEntityWhenDescriptionIsInvalid() throws Exception {

        task.setDescription("defghij");
        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(post("/tasks")
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void insertShouldReturnUnprocessableEntityWhenTaskHasNoCategories() throws Exception {

        task.getCategories().clear();
        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(post("/tasks")
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void updateShouldReturnTaskDTOWhenIdExists() throws Exception {

        task.setTitle("Malhar peito e estudar PHP");
        task.setDescription("Contar e descrever os meros detalhes e treinar pesado na perna");
        task.getCategories().clear();
        task.getCategories().add(new Category(1L, null));
        task.getCategories().add(new Category(4L, null));

        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(put("/tasks/{id}", existingTaskId)
                                .content(jsonBody)
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                                .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.id").value(7L));
        result.andExpect(jsonPath("$.title").value("Malhar peito e estudar PHP"));
        result.andExpect(jsonPath("$.description").value("Contar e descrever os meros detalhes e treinar pesado na perna"));
        result.andExpect(jsonPath("$.categories[0].id").value(1L));
        result.andExpect(jsonPath("$.categories[1].id").value(4L));
    }

    @Test
    public void updateShouldReturnNotFoundWhenIdDoesNotExist() throws Exception {

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(put("/tasks/{id}", nonExistingTaskId)
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isNotFound());
    }

    @Test
    public void updateShouldReturnUnprocessableEntityWhenIdExistsAndInvalidTitle() throws Exception {

        task.setTitle("ab");

        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(put("/tasks/{id}", existingTaskId)
                                .content(jsonBody)
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                        .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void updateShouldReturnUnprocessableEntityWhenIdExistsAndInvalidDescription() throws Exception {

        task.setDescription("de");

        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(put("/tasks/{id}", existingTaskId)
                                .content(jsonBody)
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                        .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void updateShouldReturnUnprocessableEntityWhenIdExistsAndTaskHasNoCategories() throws Exception {

        task.getCategories().clear();

        taskDTO = new TaskDTO(task);

        String jsonBody = objectMapper.writeValueAsString(taskDTO);

        ResultActions result =
                mockMvc.perform(put("/tasks/{id}", existingTaskId)
                                .content(jsonBody)
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                        .andDo(MockMvcResultHandlers.print());

        result.andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void deleteShouldReturnNoContentWhenIdExists() throws Exception {

        ResultActions result =
                mockMvc.perform(delete("/tasks/{id}", existingTaskId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isNoContent());
    }

    @Test
    public void deleteShouldReturnNotFoundWhenIdDoesNotExist() throws Exception {

        ResultActions result =
                mockMvc.perform(delete("/products/{id}", nonExistingTaskId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isNotFound());
    }
}