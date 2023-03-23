package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class UpdateController {
    @Autowired
    BookService bookService = new BookService();

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/update")
    String updateBook(Book book){
        Date now = new Date();
        book.setDate(now);
        bookService.persist(book);
        return "ok";
    }
}
