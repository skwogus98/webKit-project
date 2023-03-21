DROP table books;

CREATE TABLE IF NOT EXISTS books (
    id INT UNSIGNED NOT NULL,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(200) NOT NULL,
    nation VARCHAR(200) NOT NULL,
    genre VARCHAR(200) NOT NULL,
    price  INT,
    insert_date DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO books
VALUES (0, "title", "category", "nation", 10000, NOW());
