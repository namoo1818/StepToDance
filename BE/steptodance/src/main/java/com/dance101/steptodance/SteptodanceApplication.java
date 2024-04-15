package com.dance101.steptodance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SteptodanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SteptodanceApplication.class, args);
	}

}
