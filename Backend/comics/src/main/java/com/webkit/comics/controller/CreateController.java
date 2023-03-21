package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CreateController {
    @Autowired
    BookService bookService = new BookService();

    @PostMapping("/insert")
    String createBook(Book book) {
        bookService.persist(book);
        return "ok";
    }
}
