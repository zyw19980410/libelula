create table admins
(
    id         int auto_increment
        primary key,
    username   varchar(20) null,
    password   varchar(64) null,
    created_at timestamp   null,
    updated_at timestamp   null
)
    collate = utf8mb4_bin
    auto_increment = 2;

INSERT INTO laravel.admins (id, username, password, created_at, updated_at) VALUES (1, 'admin', '$2y$10$UuhMgdLZQnD4QjP9gWH1NOa6QNNWNYR2WYmy.rWW47Wg1103OVT5m', '2022-04-15 15:43:05', '2022-04-15 15:43:06');
