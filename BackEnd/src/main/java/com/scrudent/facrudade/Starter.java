package com.scrudent.facrudade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@ComponentScan(basePackages = "com.scrudent.facrudade.controller")
@EntityScan(basePackages = { "com.scrudent.facrudade.model" })
@EnableJpaRepositories(basePackages = { "com.scrudent.facrudade.repository" })
public class Starter {

	public static void main(String[] args) {
		SpringApplication.run(Starter.class, args);
	}
}