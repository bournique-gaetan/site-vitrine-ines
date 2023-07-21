DROP DATABASE IF EXISTS `sitePsychologue`;

CREATE DATABASE `sitePsychologue`;

USE `sitePsychologue`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE
    `users` (
        `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        `fullname` varchar(255),
        `email` varchar(255),
        `phone` varchar(15),
        `message` varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

INSERT INTO
    `users` (
        fullname,
        email,
        phone,
        message
    )

VALUES (
        "leG",
        "leG@gmail.com",
        "0784221202",
        "blblblblblbbll"
    );