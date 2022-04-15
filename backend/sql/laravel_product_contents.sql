create table product_contents
(
    id         bigint auto_increment
        primary key,
    product_id bigint   not null,
    content    longtext null,
    constraint product_contents_ibfk_1
        foreign key (product_id) references products (id)
            on delete cascade
)
    collate = utf8mb4_bin
    auto_increment = 2;

create index product_id
    on product_contents (product_id);

INSERT INTO laravel.product_contents (id, product_id, content) VALUES (1, 1, null);
INSERT INTO laravel.product_contents (id, product_id, content) VALUES (2, 2, null);
INSERT INTO laravel.product_contents (id, product_id, content) VALUES (3, 3, null);
