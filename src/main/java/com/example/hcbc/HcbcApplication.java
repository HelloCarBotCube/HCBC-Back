package com.example.hcbc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class HcbcApplication {

    public static void main(String[] args) {
        SpringApplication.run(HcbcApplication.class, args);
    }

}
