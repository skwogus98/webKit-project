package com.webkit.comics;

import com.webkit.comics.domain.Book;
import com.webkit.comics.repository.BookRepository;
import com.webkit.comics.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@DataJpaTest
@Slf4j
public class DBTests {
    @Autowired
    BookRepository bookRepository;
    @Test
    void findByIdTest(){
        List<Book> bookList = (List<Book>) bookRepository.findAll();
        for (Book book : bookList){
            log.info(book.getTitle());
        }
    }
}
