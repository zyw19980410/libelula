create table categories
(
    id             bigint auto_increment
        primary key,
    category_title varchar(255)         not null,
    visibility     tinyint(1) default 1 not null
)
    charset = utf8;

