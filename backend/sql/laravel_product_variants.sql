create table product_variants
(
    id            bigint auto_increment
        primary key,
    product_id    bigint         not null,
    variant_title varchar(45)    not null,
    variant_code  varchar(45)    null,
    quantity      int(10)        not null,
    ori_price     decimal(10, 2) null,
    price         decimal(10, 2) not null,
    buy_price     decimal(10, 2) null,
    weight        decimal(10, 2) null,
    constraint product_variants_ibfk_1
        foreign key (product_id) references products (id)
            on delete cascade
)
    collate = utf8mb4_bin
    auto_increment = 2;

create index product_id
    on product_variants (product_id);

INSERT INTO laravel.product_variants (id, product_id, variant_title, variant_code, quantity, ori_price, price, buy_price, weight) VALUES (1, 1, 'course1', null, 10000, null, 1000.00, null, null);
INSERT INTO laravel.product_variants (id, product_id, variant_title, variant_code, quantity, ori_price, price, buy_price, weight) VALUES (2, 2, 'course', null, 100000, null, 500.00, null, null);
INSERT INTO laravel.product_variants (id, product_id, variant_title, variant_code, quantity, ori_price, price, buy_price, weight) VALUES (3, 3, 'course', null, 10000, null, 799.00, null, null);
