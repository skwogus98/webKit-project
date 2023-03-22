package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReadController {
    @Autowired
    BookService bookService = new BookService();

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/bookDetail")
    List<Book> bookDetail(@RequestParam int id) {
        return bookService.findBook(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/bookList")
    List<Book> bookList(@RequestParam String nation, @RequestParam String genre) {
        return bookService.findBooks(nation, genre);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/bookSearch")
    List<Book> bookSearch(@RequestParam String nation,@RequestParam String genre,@RequestParam String title) {
        return bookService.searchBook(nation, genre, title);
    }
}
