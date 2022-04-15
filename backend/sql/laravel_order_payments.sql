create table order_payments
(
    id             bigint auto_increment
        primary key,
    order_id       bigint         not null,
    pay_no         varchar(45)    null,
    no             varchar(45)    not null,
    payment_method varchar(45)    not null,
    pay_amount     decimal(10, 2) not null,
    status         varchar(45)    not null,
    pay_at         timestamp      null,
    created_at     timestamp      null,
    updated_at     timestamp      null,
    constraint order_payments_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index order_id
    on order_payments (order_id);

