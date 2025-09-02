package com.investify.controller;

import com.investify.model.Transaction;
import com.investify.repo.TransactionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/txns")
public class TransactionController {

    private final TransactionRepository repo;

    public TransactionController(TransactionRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Transaction> all() {
        return repo.findAll();
    }

    @PostMapping
    public Transaction create(@RequestBody Transaction t) {
        return repo.save(t);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        repo.deleteById(id);
    }
}
