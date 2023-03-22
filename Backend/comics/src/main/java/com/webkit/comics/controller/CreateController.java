package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class CreateController {
    @Autowired
    BookService bookService = new BookService();

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/insert")
    String createBook(@RequestBody Book book) {
        bookService.persist(book);
        return "ok";
    }
//    Book createBook(@RequestBody Book book) {
//        return book;
//    }

}
