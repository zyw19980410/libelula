create table order_shipment_items
(
    id            bigint auto_increment
        primary key,
    shipment_id   bigint         null,
    variant_id    bigint         null,
    variant_code  bigint         null,
    product_title varchar(45)    null,
    product_unit  varchar(45)    null,
    variant_title varchar(45)    null,
    quantity      int(10)        null,
    weight        decimal(10, 2) null,
    constraint order_shipment_items_ibfk_1
        foreign key (shipment_id) references order_shipments (id)
            on delete cascade
)
    collate = utf8mb4_bin;

create index shipment_id
    on order_shipment_items (shipment_id);

