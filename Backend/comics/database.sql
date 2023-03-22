DROP table books;

CREATE TABLE IF NOT EXISTS books
(
    id          INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY key,
    title       VARCHAR(200) NOT NULL,
    category    VARCHAR(200) NOT NULL,
    nation      VARCHAR(200) NOT NULL,
    genre       VARCHAR(200) NOT NULL,
    price       INT,
    insert_date DATETIME     NOT NULL DEFAULT NOW()
);

ALTER TABLE books
    AUTO_INCREMENT = 1;
INSERT INTO books (title, category, nation, genre, price)
VALUES ("title", "category", "nation", "genre", 10000);