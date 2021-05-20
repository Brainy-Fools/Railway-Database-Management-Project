--To connect from sql command prompt
--connect username/password

-- --SQL Command Type in Oracle
-- # Data Definition Language (DDL)
-- DDL is used to create and remove database objects
-- example: create,alter,delete commands
-- # Data Manipulation Language (DML)
-- DML is used to manipulate data in the alter database
-- example: insert,delete,update,select commands
-- # Data Control Language (DCL)
-- DCL is used to control the kind of data transition and access to the database,like who can access and who can't access
-- example: commit,roolback and transition control commands,grant,revoke...

select * from EMPLOYEE;
select * from EMPLOYEE where EMPLOYEE.SALARY=120000 or EMPLOYEE.SALARY=150000 ;
--same command with in
select * from EMPLOYEE where EMPLOYEE.SALARY in (120000,150000);
--let's see not in
select * from EMPLOYEE where EMPLOYEE.SALARY not in (120000,150000);
--check constrainsts
--not null
select * from STUDENT where STUDENT.CLASS is not null;
--unique constraint
-- create table tbb1 (id number,email varchar(20) unique)
ALTER TABLE student ADD (email varchar(20) unique);
select * from STUDENT;

ALTER TABLE STUDENT
MODIFY email varchar(40);

UPDATE student SET STUDENT.email='ultapaltapagla@gmail.com' WHERE id = 2;
UPDATE student SET STUDENT.email='bekarfokirnimasumbhai@gmail.com' WHERE id = 3;
UPDATE student SET STUDENT.email='masumbhaiexperimental@gmail.com' WHERE id = 4;
UPDATE student SET STUDENT.email='MasumBhaiZindabad@gmail.com' WHERE id = 1;
--now if i push another column with same email but id different,it won't let me do (as i declared as unique)
UPDATE student SET STUDENT.email='ultapaltapagla@gmail.com' WHERE id = 1;

ALTER TABLE STUDENT
ADD CONSTRAINT pk_student PRIMARY KEY (ID);

SELECT * FROM all_tables WHERE  num_rows > 1;

create table teacher(teacher_id number primary key ,name varchar(20) not null ,take_clas number);
insert all
into teacher (teacher_id, name, take_clas) values (1,'Sharlok',2)
into teacher (teacher_id, name, take_clas) values (2,'Professor',1)
into teacher (teacher_id, name, take_clas) values (3,'Lecturer',3)
into teacher (teacher_id, name, take_clas) values (4,'Emirates Professor',4)
select * from DUAL;

select * from teacher;
--purpose of making foriegn key is to :confined data to only parents/referenced value
create table student_teacher_Rel (teacher_id number primary key references teacher,id number references student ,remarks varchar(15));

select * from student_teacher_Rel;

insert all
into student_teacher_Rel (teacher_id, id, remarks) values (1,1,'impressive')
into student_teacher_Rel (teacher_id, id, remarks) values (2,2,'Boring')
into student_teacher_Rel (teacher_id, id, remarks) values (3,3,'Cool')
into student_teacher_Rel (teacher_id, id, remarks) values (4,4,'Outdated')
select * from DUAL;

--let's see integrity constrainsts error
insert into student_teacher_Rel values (1,9,'Worst');  --here 9 is not present in referenced table
--using alter method to add forign_key
alter table student_teacher_Rel
add constraint fk_teacher_id
foreign key (teacher_id)
references teacher(teacher_id);
--check constraints
create table test_table10
(
    name  varchar2(32),
    marks number,
    constraint check_marks check (marks between 0 and 100)
);
insert into test_table10 (name, marks) values ('hero Masum',75);
--but this will give error
insert into test_table10 (name, marks) values ('hero Alom',-90);

--lets make a column that only accepts capital letter
drop table test_table10;
create table test_table10
(
    name  varchar2(32),
    marks number,
    constraint check_marks check (marks between 0 and 100),
    constraint check_names check (name=upper(name))
);
-- now this will give error as name is small letter here
insert into test_table10 (name, marks) values ('hero Masum',75);
--this is correct
insert into test_table10 (name,marks) values ('MASUMBHAI',100);

select * from test_table10;
--drop constraints
alter table test_table10 drop constraint check_names;
insert into test_table10 (name,marks) values ('hero Masum',33);   --yes now we can enter mix letter in name column
