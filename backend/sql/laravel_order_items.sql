create table order_items
(
    id            bigint auto_increment
        primary key,
    order_id      bigint         null,
    variant_id    bigint         null,
    variant_code  varchar(45)    null,
    product_unit  varchar(20)    null,
    product_title varchar(255)   null,
    variant_title varchar(255)   null,
    price         decimal(10, 2) null,
    quantity      int(10)        null,
    weight        decimal(10, 2) null,
    constraint order_items_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index order_id
    on order_items (order_id);

