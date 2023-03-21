package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UpdateController {
    @Autowired
    BookService bookService = new BookService();

    @PostMapping("/update")
    String updateBook(Book book){
        bookService.persist(book);
        return "ok";
    }
}
