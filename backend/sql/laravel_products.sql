create table products
(
    id            bigint auto_increment
        primary key,
    product_title varchar(255)         not null,
    product_des   text                 null,
    product_unit  varchar(45)          null,
    on_sale       tinyint(1) default 0 null,
    created_at    timestamp            null,
    updated_at    timestamp            null
)
    collate = utf8mb4_bin
    auto_increment = 2;

INSERT INTO laravel.products (id, product_title, product_des, product_unit, on_sale, created_at, updated_at) VALUES (1, 'test_1', 'this is description for service 1', null, 1, '2022-04-15 16:28:25', '2022-04-15 16:28:25');
INSERT INTO laravel.products (id, product_title, product_des, product_unit, on_sale, created_at, updated_at) VALUES (2, 'test product 3', 'this is description for service 3', null, 1, '2022-04-15 18:23:05', '2022-04-15 18:23:05');
INSERT INTO laravel.products (id, product_title, product_des, product_unit, on_sale, created_at, updated_at) VALUES (3, 'test product 2', 'this is description for service 2', null, 1, '2022-04-15 18:27:00', '2022-04-15 18:27:00');
