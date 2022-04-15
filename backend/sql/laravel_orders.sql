create table orders
(
    id               bigint auto_increment
        primary key,
    no               varchar(45)                   not null,
    customer_id      bigint                        not null,
    items_amount     decimal(10, 2)                not null,
    shipments_amount decimal(10, 2)                not null,
    discounts_amount decimal(10, 2)                not null,
    amount           decimal(10, 2)                null,
    status           varchar(10) default 'pending' not null,
    refund_status    varchar(10)                   null,
    send_at          timestamp                     null,
    pay_at           timestamp                     null,
    closed_reason    varchar(255)                  null,
    remark           varchar(255)                  null,
    success_at       timestamp                     null,
    closed_at        timestamp                     null,
    created_at       timestamp                     null,
    updated_at       timestamp                     null,
    constraint orders_ibfk_1
        foreign key (customer_id) references customers (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index customer_id
    on orders (customer_id);

