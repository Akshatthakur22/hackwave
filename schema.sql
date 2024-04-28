show databases;
use hackwave;
create table userdata(
id integer primary key auto_increment,
username varchar(60) not null,
email varchar(255) not null,
pass varchar(50) not null
);



