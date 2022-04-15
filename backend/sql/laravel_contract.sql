create table contract
(
    id         int auto_increment
        primary key,
    email      varchar(200) null,
    first_name varchar(200) null,
    last_name  varchar(200) null,
    phone      varchar(11)  null,
    feedback   text         null,
    constraint contract_id_uindex
        unique (id)
);

INSERT INTO laravel.contract (id, email, first_name, last_name, phone, feedback) VALUES (1, 'test@exmaple.com', 'xuewei', 'niu', '13888888888', 'Here are some problems I met.');
