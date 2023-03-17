package com.webkit.comics.controller;

import com.webkit.comics.domain.Book;
import com.webkit.comics.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class HomeController {
    @Autowired
    BookService bookService = new BookService();
    @GetMapping("/")
    String home(){
        return "hi";
    }

    @GetMapping("/all")
    List<Book> bookList(){
        return bookService.selectAll();
    }

    @GetMapping("/insert")
    void insertBook(){
        Book book = new Book();
        book.setCategory("만화");
        book.setNation("korea");
        book.setPrice(30000);
        book.setTitle("오빠는끝");
        bookService.persist(book);
    }
    @GetMapping("/find")
    List<Book> findBook(){
        return bookService.findBook("오빠는끝");
    }
}
