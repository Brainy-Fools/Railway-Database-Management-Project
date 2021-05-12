create table student (id number,name varchar(20),class number,city varchar(15)); --Let's learn Join
insert all
into student (id, name, class, city) values (1,'Abul',2,'dhaka')
into student (id, name, class, city) values (2,'Babul',2,'dhaka')
into student (id, name, class, city) values (3,'Habul',2,'dhaka')
into student (id, name, class, city) values (4,'Kabul',2,'dhaka')
into student (id, name, class, city) values (5,'Moqbul',2,'dhaka')
select * from DUAL;

select *
from student;

UPDATE student SET class = 3,city = 'Cumilla' WHERE id = 2;
UPDATE student SET class = 5,city = 'Barishal' WHERE id = 3;
UPDATE student SET class = 2,city = 'Faridpur' WHERE id = 4;
UPDATE student SET class = 4,city = 'Sylhet' WHERE id = 4;

create table records (id number,class number,city varchar(15));

insert into records (id, class, city) values (7,(select class from student where id=1),(select city from student where id=1));
insert into records (id, class, city) values (8,(select class from student where id=3),(select city from student where id=2));
insert into records (id, class, city) values (9,(select class from student where id=2),(select city from student where id=3));
insert into records (id, class, city) values (10,(select class from student where id=5),(select city from student where id=5));

select * from records;

--Finding Duplicate values in column
select id, count(id)
from records
group by id
having count (id) > 1;
--Deleting my Duplicate values
delete from records where id=7;
--now see the outcome
select * from records;   --Oh,shit!all duplicate values are gone😬
--let's do it again
insert into records (id, class, city) values (7,(select class from student where id=1),(select city from student where id=1));
insert into records (id, class, city) values (7,(select class from student where id=1),(select city from student where id=1));
--now id 7 has duplicate i want one to remain,one to delete
select rowid,id from records;
--yess,now only unique element will remain
delete from records a
where rowid > (select min(rowid) from records b
where b.id=a.id);
--see the records now
select * from records;
--this is equi join
select st.name,st.city,rc.class from student st,records rc where st.CITY = rc.city;
--this is self join
select st1.id,st1.name,st1.city,st2.class from student st1,student st2 where st1.class = st2.class;
-- this is natural join
select id,city from student natural join st_records;  --it will give common of them

create table st_records
(
    ID    NUMBER,
    CLASS NUMBER,
    CITY  VARCHAR2(15)
);
--copying all elements from existing table to another table
INSERT INTO st_records SELECT * FROM records;

select * from records;
select * from st_records;
--cross join query
select * from student,st_records; --it will give total_rows_of_student_table * total_rows_of_st_records
--same query but now i'm using cross join command
select * from student cross join st_records; --it will also give 20 columns

--now for outer join.(Left,Right,Full)
--Left join means all rows from left table & only conditioned matched Right tables rows
select * from student,st_records where student.class = st_records.CLASS(+);
--similar command using left join
select * from student left outer join st_records on student.class=st_records.CLASS;
--Right join means all rows from left table & only conditioned matched Left tables rows
select * from student,st_records where student.class(+) = st_records.CLASS;
--similar command using right join
select * from student right outer join st_records on student.class=st_records.CLASS;
--In full outer join,no matching conditioned will get null
select * from student full outer join st_records on student.class=st_records.CLASS;

--Anti Join
--it returns row from first table where no matches are found in the second table
select * from student where id not in (select id from st_records where st_records.CITY='dhaka');
