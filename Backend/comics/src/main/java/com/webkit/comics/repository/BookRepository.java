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

    public List<Book> findTop10ByOrderByDateDesc();

    public List<Book> findTop10ByNationOrderByDateDesc(String nation);

    public List<Book> findTop10ByNationAndGenreOrderByDateDesc(String nation, String genre);

    public List<Book> findBooksByTitleContainsOrCategoryContains(String title, String category);

    public List<Book> findBooksByNationAndTitleContainsAndCategoryContains(String nation, String title, String category);

    public List<Book> findBooksByNationAndGenreAndTitleContainsAndCategoryContains(String nation, String genre, String title, String category);
}
