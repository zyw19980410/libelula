create table customers
(
    id         bigint auto_increment
        primary key,
    mobile     varchar(11)  not null comment '大陆电话号码',
    avatar     varchar(255) null comment '头像',
    username   varchar(45)  not null,
    password   varchar(64)  not null,
    created_at timestamp    null,
    updated_at timestamp    null,
    constraint mobile
        unique (mobile, username)
)
    collate = utf8mb4_bin
    auto_increment = 15;

INSERT INTO laravel.customers (id, mobile, avatar, username, password, created_at, updated_at) VALUES (14, '13888888888', null, 'm_220415365', '$2y$10$UuhMgdLZQnD4QjP9gWH1NOa6QNNWNYR2WYmy.rWW47Wg1103OVT5m', '2022-04-15 11:06:19', '2022-04-15 11:06:19');
