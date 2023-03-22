package com.webkit.comics;

import com.webkit.comics.domain.Book;
import com.webkit.comics.repository.BookRepository;
import com.webkit.comics.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class DBTests {
    @Autowired
    BookRepository bookRepository;

    //    @Test
//    void findByIdTest() {
//        List<Book> bookList = bookRepository.findTop10ByOrderByDateDesc();
//        for (int i = 0; i < bookList.size(); i++) {
//            System.out.println(bookList.get(i).getTitle());
//        }
//    }
    @Test
    void detailSearch() {
        List<Book> bookList = bookRepository.findBooksByNationAndGenreAndTitleContainsAndCategoryContains("일본 만화", "기획도서", "2", "ts");
        for (int i = 0; i < bookList.size(); i++) {
            System.out.println(bookList.get(i).getTitle());
        }
    }
}
