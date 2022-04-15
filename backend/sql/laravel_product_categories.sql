create table product_categories
(
    id          bigint auto_increment
        primary key,
    product_id  bigint null,
    category_id bigint null,
    constraint product_categories_ibfk_1
        foreign key (product_id) references products (id)
            on delete cascade
)
    charset = utf8;

create index product_id
    on product_categories (product_id);

