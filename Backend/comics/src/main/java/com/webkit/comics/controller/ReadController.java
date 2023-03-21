package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReadController {
    @Autowired
    BookService bookService = new BookService();

    @GetMapping("/bookDetail")
    List<Book> bookDetail(@RequestParam int id){
        return bookService.findBook(id);
    }

    @GetMapping("/bookList")
    List<Book> bookList(@RequestParam String nation, @RequestParam String genre){
        return bookService.findBooks(nation, genre);
    }

    @GetMapping("/bookSearch")
    List<Book> bookSearch(@RequestParam String title){
        return bookService.searchBook(title);
    }
}
