package com.investify.controller;

import com.investify.service.GeminiService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AIController {

    private final GeminiService gemini;

    public AIController(GeminiService gemini) {
        this.gemini = gemini;
    }

    @PostMapping("/ask")
    public Mono<Map<String, String>> ask(@RequestBody Map<String, String> body) {
        String prompt = body.getOrDefault("prompt", "Suggest a ₹30,000 monthly budget");
        return gemini.ask(prompt).map(resp -> Map.of("answer", resp));
    }

    @GetMapping
    public Map<String, String> info() {
        return Map.of("info", "POST /api/ai/ask with JSON {\"prompt\":\"...\"}");
    }
}
