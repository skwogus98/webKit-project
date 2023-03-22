package com.webkit.comics.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    private String title;
    private String category;
    private String nation;
    private String genre;
    private int price;
    @Column(name = "insert_date")
    private Date date = new Date();
}
