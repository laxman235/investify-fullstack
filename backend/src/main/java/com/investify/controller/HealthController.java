package com.investify.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "UP",
            "app", "InvestiFy",
            "version", "0.1.0",
            "timestamp", String.valueOf(System.currentTimeMillis())
        );
    }
}
