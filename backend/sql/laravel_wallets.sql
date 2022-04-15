create table wallets
(
    id          bigint auto_increment
        primary key,
    customer_id bigint         not null,
    amount      decimal(10, 2) not null,
    no          varchar(45)    not null,
    type        varchar(45)    not null,
    content     varchar(255)   null,
    created_at  timestamp      null,
    updated_at  timestamp      null,
    constraint wallets_ibfk_1
        foreign key (customer_id) references customers (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index customer_id
    on wallets (customer_id);

