create table addresses
(
    id          bigint auto_increment
        primary key,
    customer_id bigint       not null,
    name        varchar(45)  not null,
    province    varchar(45)  not null,
    district    varchar(45)  null,
    city        varchar(45)  not null,
    detail      varchar(255) null,
    zip         varchar(10)  null,
    mobile      varchar(13)  not null,
    `default`   tinyint(1)   null,
    created_at  timestamp    null,
    updated_at  timestamp    null,
    constraint addresses_ibfk_1
        foreign key (customer_id) references customers (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index customer_id
    on addresses (customer_id);

