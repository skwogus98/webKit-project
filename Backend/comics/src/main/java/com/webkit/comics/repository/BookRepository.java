package com.webkit.comics.repository;

import com.webkit.comics.domain.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    @Transactional
    public void deleteBookById(int id);

    public List<Book> findById(int id);

    public List<Book> findTop10By();

    public List<Book> findTop10ByNation(String nation);

    public List<Book> findTop10ByNationAndGenre(String nation, String genre);

    public List<Book> findBooksByTitleContains(String title);
}
