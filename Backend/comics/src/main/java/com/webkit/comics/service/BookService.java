package com.webkit.comics.service;

import com.webkit.comics.domain.Book;
import com.webkit.comics.repository.BookRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public void persist(Book book) {
        bookRepository.save(book);
    }

    public List<Book> selectAll() {
        return (List<Book>) bookRepository.findAll();
    }

    public void deleteBook(int id) {
        bookRepository.deleteBookById(id);
    }

    public List<Book> findBook(int id){
        return bookRepository.findById(id);
    }

    public List<Book> findBooks(String nation, String genre){
        if(nation==""){
            return bookRepository.findTop10ByOrderByDateDesc();
        }
        else if(genre==""){
            return bookRepository.findTop10ByNationOrderByDateDesc(nation);
        }
        else{
            return bookRepository.findTop10ByNationAndGenreOrderByDateDesc(nation, genre);
        }
    }

    public List<Book> searchBook(String nation, String genre, String title){
        if(nation==""){
            return bookRepository.findBooksByTitleContainsOrCategoryContains(title, title);
        }
        else if(genre==""){
            return bookRepository.findBooksByNationAndTitleContainsAndCategoryContains(nation, title, title);
        }
        else {
            return bookRepository.findBooksByNationAndGenreAndTitleContainsAndCategoryContains(nation, genre, title, title);
        }
    }
}
