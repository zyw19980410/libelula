create table shipments
(
    id             bigint auto_increment
        primary key,
    shipment_title varchar(255)   null,
    visibility     tinyint(1)     null,
    need_cost      tinyint(1)     null,
    cost_type      varchar(10)    null,
    price_1        decimal(10, 2) null,
    value_1        decimal(10, 2) null,
    price_2        decimal(10, 2) null,
    value_2        decimal(10, 2) null
)
    charset = utf8;

