create table product_images
(
    id         bigint auto_increment
        primary key,
    product_id bigint not null,
    image_id   bigint not null,
    sort       int(5) not null,
    constraint product_images_ibfk_1
        foreign key (product_id) references products (id)
            on delete cascade,
    constraint product_images_ibfk_2
        foreign key (image_id) references images (id)
            on delete cascade
)
    collate = utf8mb4_bin
    auto_increment = 2;

create index image_id
    on product_images (image_id);

create index product_id
    on product_images (product_id);

INSERT INTO laravel.product_images (id, product_id, image_id, sort) VALUES (1, 1, 1, 0);
INSERT INTO laravel.product_images (id, product_id, image_id, sort) VALUES (2, 2, 3, 0);
INSERT INTO laravel.product_images (id, product_id, image_id, sort) VALUES (3, 3, 2, 0);
