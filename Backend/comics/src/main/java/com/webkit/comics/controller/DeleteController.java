package com.webkit.comics.controller;

import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DeleteController {
    @Autowired
    BookService bookService = new BookService();

    @DeleteMapping("/book")
    String deleteBook(@RequestParam("id") int id){
        bookService.deleteBook(id);
        return "ok";
    }
}
