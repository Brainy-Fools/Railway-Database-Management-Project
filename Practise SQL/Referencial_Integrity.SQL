-- -Referencial integrity
create table student_add (roll_no number,name varchar(20),city varchar(15),mobile number(11),pin number(10));
insert all
into student_add values (1,'A','Dhaka',01551805248,1230)
into student_add values (2,'B','Rangpur',01551805248,1230)
into student_add values (3,'C','Cumilla',01551805248,1230)
into student_add values (4,'D','Chitagang',01551805248,1230)
into student_add values (5,'E','Rajsahi',01551805248,1230)
select * from dual;

select * from student_add;
ALTER TABLE student_add ADD PRIMARY KEY (roll_no);

create table st_marks (
    roll_no number references student_add,
    subject varchar(20),
    marks number (2)
    );

insert all
into st_marks values (1,'C++',98)
into st_marks values (2,'Java',86)
into st_marks values (2,'Python',91)
into st_marks values (3,'Javascript',89)
select * from dual;

select * from st_marks;
--Now if i want to store a roll_no which is not in student_add roll_no Then:
insert into st_marks values (6,'C#',84);
-- it will show error: integrity constraint (SYSTEM.SYS_C007239) violated - parent key not found

-- now if i want something like this: if i delete data from student_add table then it will also delete from st_marks table...
ALTER TABLE student_add
DROP PRIMARY KEY;
