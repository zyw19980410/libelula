create table order_shipments
(
    id               bigint auto_increment
        primary key,
    order_id         bigint      null,
    shipment_no      varchar(45) null,
    shipment_company varchar(45) null,
    created_at       timestamp   null,
    updated_at       timestamp   null,
    constraint order_shipments_ibfk_1
        foreign key (order_id) references orders (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index order_id
    on order_shipments (order_id);

