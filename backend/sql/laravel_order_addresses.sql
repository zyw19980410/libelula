create table order_addresses
(
    id       bigint auto_increment
        primary key,
    order_id bigint       null,
    name     varchar(45)  not null,
    province varchar(45)  not null,
    district varchar(45)  null,
    city     varchar(45)  not null,
    detail   varchar(255) not null,
    mobile   varchar(13)  not null,
    zip      varchar(10)  null,
    constraint order_addresses_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index order_id
    on order_addresses (order_id);

