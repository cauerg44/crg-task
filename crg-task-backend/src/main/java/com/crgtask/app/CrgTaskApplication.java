package com.crgtask.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrgTaskApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CrgTaskApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Hello, Spring Boot App!");
	}
}
