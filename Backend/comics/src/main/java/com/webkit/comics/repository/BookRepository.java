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

    public List<Book> findBooksByTitleContainsOrCategoryContainsAndNation(String title, String category, String nation);

    public List<Book> findBooksByTitleContainsOrCategoryContainsAndNationAndGenre(String title, String category, String nation, String genre);

    public List<Book> findBooksByTitleContainsOrCategoryContainsAndPriceLessThanEqual(String title, String category, int price);

    public List<Book> findBooksByTitleContainsOrCategoryContainsAndNationAndPriceLessThanEqual(String title, String category, String nation, int price);

    public List<Book> findBooksByTitleContainsOrCategoryContainsAndNationAndGenreAndPriceLessThanEqual(String title, String category, String nation, String genre, int price);
}
