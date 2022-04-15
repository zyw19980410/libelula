create table images
(
    id        bigint auto_increment
        primary key,
    img_file  varchar(255) null,
    img_link  varchar(255) null,
    img_name  varchar(255) null,
    img_bytes int(20)      null
)
    collate = utf8mb4_bin
    auto_increment = 4;

INSERT INTO laravel.images (id, img_file, img_link, img_name, img_bytes) VALUES (1, 'images/202204151619241124.jpeg', null, '202204151619241124.jpeg', 8574);
INSERT INTO laravel.images (id, img_file, img_link, img_name, img_bytes) VALUES (2, 'images/202204151620064643.png', null, '202204151620064643.png', 14768);
INSERT INTO laravel.images (id, img_file, img_link, img_name, img_bytes) VALUES (3, 'images/202204151620224611.jpeg', null, '202204151620224611.jpeg', 7369);
