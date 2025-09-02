package com.investify.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Service
public class GeminiService {
    private final WebClient webClient;

    @Value("${gemini.baseUrl}")
    private String baseUrl;

    // Try property 'gemini.api.key', then env 'GEMINI_API_KEY', else empty string
    @Value("${gemini.api.key:${GEMINI_API_KEY:}}")
    private String apiKey;

    @Value("${gemini.model}")
    private String model;

    public GeminiService(WebClient webClient) { this.webClient = webClient; }

    public Mono<String> ask(String prompt) {
        String url = String.format("%s/v1/models/%s:predict", baseUrl, model);
        Map<String, Object> payload = Map.of(
                "contents", new Object[] { Map.of("parts", new Object[] { Map.of("text", prompt) }) }
        );
        return webClient.post()
                .uri(url)
                .header("Authorization", "Bearer " + apiKey)
                .bodyValue(payload)
                .retrieve()
                .bodyToMono(String.class);
    }
}
