create table order_refunds
(
    id         bigint auto_increment
        primary key,
    order_id   bigint       null,
    reason     varchar(255) null,
    status     varchar(10)  null,
    created_at timestamp    null,
    updated_at timestamp    null,
    constraint order_refunds_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    charset = utf8;

create index order_id
    on order_refunds (order_id);

