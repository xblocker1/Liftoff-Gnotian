package com.LiftoffApp.Gnotian;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GnotianApplication {

	public static void main(String[] args) {
		SpringApplication.run(GnotianApplication.class, args);
	}

}
