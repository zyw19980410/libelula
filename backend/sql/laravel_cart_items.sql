create table cart_items
(
    id            bigint auto_increment
        primary key,
    customer_id   bigint         null,
    variant_id    bigint         null,
    product_title varchar(255)   null,
    variant_title varchar(255)   null,
    product_unit  varchar(45)    null,
    price         decimal(10, 2) null,
    quantity      int(10)        null,
    constraint cart_items_ibfk_1
        foreign key (customer_id) references customers (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index customer_id
    on cart_items (customer_id);

