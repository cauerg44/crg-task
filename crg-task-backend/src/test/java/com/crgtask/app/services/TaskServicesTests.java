package com.crgtask.app.services;

import com.crgtask.app.dto.TaskDTO;
import com.crgtask.app.entities.Task;
import com.crgtask.app.factory.TaskFactory;
import com.crgtask.app.repositories.TaskRepository;
import com.crgtask.app.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
public class TaskServicesTests {

    @InjectMocks
    private TaskService service;

    @Mock
    private TaskRepository repository;

    private long existingTaskId, nonExistingTaskId;
    private String taskTitle;
    private Task task;
    private TaskDTO taskDTO;
    private List<Task> list;

    @BeforeEach
    void setUp() throws Exception {
        existingTaskId = 1L;
        nonExistingTaskId = 2L;

        taskTitle = "Fazer meditação";

        task = TaskFactory.createTask(taskTitle);
        taskDTO = new TaskDTO(task);
        list = new ArrayList<>(List.of(task));

        Mockito.when(repository.findById(existingTaskId)).thenReturn(Optional.of(task));
        Mockito.when(repository.findById(nonExistingTaskId)).thenReturn(Optional.empty());

        Mockito.when(repository.findAll()).thenReturn(list);

        Mockito.when(repository.save(any())).thenReturn(task);

        Mockito.when(repository.getReferenceById(existingTaskId)).thenReturn(task);
        Mockito.when(repository.getReferenceById(nonExistingTaskId)).thenThrow(EntityNotFoundException.class);

        Mockito.when(repository.existsById(existingTaskId)).thenReturn(true);
        Mockito.when(repository.existsById(nonExistingTaskId)).thenReturn(false);

        Mockito.doNothing().when(repository).deleteById(existingTaskId);
    }

    @Test
    public void findByIdShouldReturnTaskDTOWhenIdExists() {

        TaskDTO result = service.findById(existingTaskId);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(result.getId(), existingTaskId);
        Assertions.assertEquals(result.getTitle(), task.getTitle());
    }

    @Test
    public void findByIdShouldReturnResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingTaskId);
        });
    }

    @Test
    public void findAllShouldReturnListTaskDTO() {

        List<TaskDTO> result = service.findAll();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(result.size(), 1);
        Assertions.assertEquals(result.iterator().next().getTitle(), taskTitle);
    }

    @Test
    public void insertShouldReturnTaskDTO() {

        TaskDTO result = service.insert(taskDTO);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(result.getId(), existingTaskId);
        Assertions.assertEquals(result.getTitle(), taskTitle);
    }

    @Test
    public void updateShouldReturnTaskDTO() {

        TaskDTO result = service.update(existingTaskId, taskDTO);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(result.getId(), existingTaskId);
        Assertions.assertEquals(result.getTitle(), taskTitle);
    }

    @Test
    public void updateShouldReturnResourceNotFoundExceptionWhenIdDoesNotExist() {

        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.update(nonExistingTaskId, taskDTO);
        });
    }

    @Test
    public void deleteShouldDoNothingWhenIdExists() {

        Assertions.assertDoesNotThrow(() -> {
            service.delete(existingTaskId);
        });
    }

    @Test
    public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {

        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.delete(nonExistingTaskId);
        });
    }
}