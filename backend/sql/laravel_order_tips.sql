create table order_tips
(
    id         bigint auto_increment
        primary key,
    order_id   bigint    null,
    tip        text      null,
    created_at timestamp null,
    updated_at timestamp null,
    constraint order_tips_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    charset = utf8;

create index order_id
    on order_tips (order_id);

