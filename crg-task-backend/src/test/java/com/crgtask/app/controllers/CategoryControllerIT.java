package com.crgtask.app.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CategoryControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void findAllShouldReturnListOfCategoryDTO() throws Exception {

        ResultActions result =
                        mockMvc.perform(get("/categories")
                            .accept(MediaType.APPLICATION_JSON));

        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.[0].id").value(1L));
        result.andExpect(jsonPath("$.[0].name").value("Estudo"));
        result.andExpect(jsonPath("$.[1].id").value(2L));
        result.andExpect(jsonPath("$.[1].name").value("Trabalho"));
        result.andExpect(jsonPath("$.[2].id").value(3L));
        result.andExpect(jsonPath("$.[2].name").value("Casa"));
        result.andExpect(jsonPath("$.[3].id").value(4L));
        result.andExpect(jsonPath("$.[3].name").value("Academia"));
    }
}
