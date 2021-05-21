--order by clause- parameter(asc or desc)
select * from STUDENT;
select * from STUDENT order by STUDENT.CLASS desc ;
--group by clause (generally it is used with aggregate functions)
select * from EMPLOYEE;
select NAME from EMPLOYEE;
select NAME from EMPLOYEE group by NAME; --without aggregate functions
select name,count(SALARY) from EMPLOYEE group by name; --using aggregate function
select name,sum(SALARY) from EMPLOYEE group by name order by sum(SALARY) desc ;--using combined group by & order by
--having clause
select name,sum(SALARY) from EMPLOYEE group by name having sum(SALARY) >160000;
select name,sum(SALARY) from EMPLOYEE group by name having sum(SALARY) >160000 order by sum(SALARY) asc;
select name,count(*) from EMPLOYEE group by name having count(*) >2;
--nested query/sub-query
select * from EMPLOYEE where SALARY=(select max(SALARY) from EMPLOYEE);
select * from EMPLOYEE where EMP_ID in (select EMP_ID from EMPLOYEE where EMP_ID >2015002);
---union, union all,intersect and minus operator
create table emp2013 (id number,name varchar2(20),salary number);
create table emp2014 (id number,name varchar2(20),salary number);
--creating sequence
CREATE SEQUENCE emp_id_seq
minvalue 1
maxvalue 9999
start with 1
increment by 1
cache 5; -- cache means the number of sequence values that Oracle will preallocate and keep in the memory for faster access.

insert all
into emp2013 (id, name, salary) values (emp_id_seq.nextval,'hero',26)
into emp2013 (id, name, salary) values (emp_id_seq.nextval,'zero',25)
into emp2013 (id, name, salary) values (emp_id_seq.nextval,'nemo',30)
into emp2013 (id, name, salary) values (emp_id_seq.nextval,'kino',23)
into emp2013 (id, name, salary) values (emp_id_seq.nextval,'mimo',30)
into emp2014 (id, name, salary) values (emp_id_seq.nextval,'mimo',28)
into emp2014 (id, name, salary) values (emp_id_seq.nextval,'pico',30)
into emp2014 (id, name, salary) values (emp_id_seq.nextval,'sugo',30)
into emp2014 (id, name, salary) values (emp_id_seq.nextval,'subaru',30)
select * from DUAL;

select * from emp2013;
select * from emp2014;

insert into emp2013 (id, name, salary) values (emp_id_seq.nextval,'hero',26);
insert into emp2013 (id, name, salary) values (emp_id_seq.nextval,'zero',25);
insert into emp2013 (id, name, salary) values (emp_id_seq.nextval,'nemo',30);
insert into emp2013 (id, name, salary) values (emp_id_seq.nextval,'kino',23);
insert into emp2013 (id, name, salary) values (emp_id_seq.nextval,'mimo',30);
insert into emp2014 (id, name, salary) values (emp_id_seq.nextval,'mimo',28);
insert into emp2014 (id, name, salary) values (emp_id_seq.nextval,'pico',30);
insert into emp2014 (id, name, salary) values (emp_id_seq.nextval,'sugo',30);
insert into emp2014 (id, name, salary) values (emp_id_seq.nextval,'subaru',30);
insert into emp2014 (id, name, salary) values (1,'subaru',30);

--union (all the duplicate values will be omitted)
select * from emp2013 union select * from emp2014;
--union all (but it will display duplicate values)
select * from emp2013 union all select * from emp2014; --see the total rows
--intersect
select * from emp2013
intersect
select * from emp2014; --result will be empty as no same values are present at 2 tables
--minus
select * from emp2014
minus
select * from emp2013;

--Data Dictionary / MetaData
select * from TAB;
select OWNER,TABLE_NAME from DBA_TABLES;
select CREATED from DBA_OBJECTS where OBJECT_NAME = 'emp2013';--it will also be blank
select CREATED from DBA_OBJECTS where OBJECT_NAME = upper('emp2013');
select CREATED from DBA_OBJECTS where OBJECT_NAME = 'EMP2013' and owner='system'; --it will be blank
select CREATED from DBA_OBJECTS where OBJECT_NAME = 'EMP2013' and owner=upper('system');

select * from ALL_SEQUENCES;
select * from ALL_VIEWS;
select * from ALL_INDEXES;
select * from ALL_ERRORS;
select * from ALL_CLUSTERS;
select * from ALL_CONSTRAINTS; --very large info
