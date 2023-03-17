package com.webkit.comics.service;

import com.webkit.comics.domain.Book;
import com.webkit.comics.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public void persist(Book book){
        bookRepository.save(book);
    }

    public List<Book> selectAll(){
        return(List<Book>) bookRepository.findAll();
    }

    public List<Book> findBook(String title){
        return bookRepository.findByTitle(title);
    }
}
