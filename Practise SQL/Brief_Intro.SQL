SELECT * FROM DUAL;  --dual table in oracle
SELECT 'Duck' FROM DUAL;
--to show date from dual
SELECT SYSDATE FROM DUAL;

SELECT 1+1+1+1 FROM DUAL;
SELECT 1+1+1+1 AS HERO FROM DUAL;
--if alias name have space
SELECT 1+1+1+1+1+1+1+1 AS "HERO MASUM" FROM DUAL;
--let's see one error
-- SELECT 1+1+1+1+1+1+1+1 AS HERO MASUM FROM DUAL;

--Alias practicing
SELECT * FROM DUAL as DU;
SELECT DU.DUMMY FROM DUAL DU;
SELECT DU.DUMMY FROM DUAL DU;
--Describe or desc keyword
--Describe <Table-name>;
--play with null
SELECT * FROM DUAL WHERE 1=1;   --it will show column as it is true
SELECT * FROM DUAL WHERE NULL=NULL;     --this will not show colums,that means in oracle null is not equal null
--concatanation
SELECT 'MasumBhai is',' Hero' AS HERO FROM DUAL;
--using concat method
SELECT CONCAT('MasumBhai is',' Hero') AS HERO FROM DUAL;
--using pipe || method
SELECT 'MasumBhai is' || ' Hero' AS HERO FROM DUAL;
--now concate two table
--SELECT CONCAT(LAST_NAME,FIRST_NAME) AS HERO_NAME FROM <TABLE_NAME>;     --as my table is not specified this will show error but syntax is okay
--imported csv data,now let's roll
 SELECT * FROM AMAZON;

SELECT * FROM AMAZON WHERE VOLUME >=7813200 ORDER BY VOLUME ASC;
--Oracle Operators
SELECT * FROM AMAZON WHERE VOLUME IS NOT NULL;
SELECT * FROM AMAZON  ORDER BY VOLUME ASC;
--in & not in
SELECT * FROM AMAZON WHERE VOLUME IN (3149000,3074900,3257400) ORDER BY VOLUME ASC;
SELECT * FROM AMAZON WHERE VOLUME NOT IN (3149000,3074900,3257400) ORDER BY VOLUME ASC;
--between .... and & not between .... and
SELECT * FROM AMAZON WHERE VOLUME BETWEEN 3568200 AND 3930000 ORDER BY VOLUME ASC;
SELECT * FROM AMAZON WHERE VOLUME NOT BETWEEN 3568200 AND 3930000 ORDER BY VOLUME ASC;
SELECT * FROM AMAZON WHERE DATE_TIME BETWEEN '01-feb-20' AND '30-jun-20' ORDER BY DATE_TIME ASC;
--is null & is not null
SELECT * FROM AMAZON WHERE VOLUME IS NULL ORDER BY VOLUME ASC;
SELECT * FROM AMAZON WHERE VOLUME IS NOT NULL ORDER BY VOLUME ASC;
--like & not like
--                            char starts with
SELECT * FROM AMAZON WHERE VOLUME LIKE '4%' ORDER BY VOLUME ASC;
--                            char ends with
SELECT * FROM AMAZON WHERE VOLUME LIKE '%200' ORDER BY VOLUME ASC;
--                            char contains
SELECT * FROM AMAZON WHERE VOLUME LIKE '%420%' ORDER BY VOLUME ASC;

--case manipulation
SELECT UPPER('The Great Hero Masum') FROM DUAL;
--now if any column consists string inside ,then
--SELECT UPPER(<COLUMN-NAME>) FROM DUAL;        --as i don't have that type data in table,so it is giving me error but syntax okay
SELECT LOWER('The Great vinland from VINLAND SAGA') FROM DUAL;
SELECT INITCAP('The Great vinland from VINLAND SAGA') FROM DUAL;
--charachter manipulation
SELECT reverse('The Great vinland from VINLAND SAGA') FROM DUAL;
SELECT LENGTH('The Great vinland from VINLAND SAGA') FROM DUAL;
--substr() function
SELECT SUBSTR('abcdefghijklmnopqrstuvwxyz',20) "SUBSTRING OUTPUT" FROM DUAL;
SELECT SUBSTR('abcdefghijklmnopqrstuvwxyz',-20) "SUBSTRING OUTPUT" FROM DUAL;     --substring position is negative
SELECT SUBSTR('abcdefghijklmnopqrstuvwxyz',20,10) "SUBSTRING OUTPUT" FROM DUAL;         --here substring length is much higher
SELECT SUBSTR('abcdefghijklmnopqrstuvwxyz',30) "SUBSTRING OUTPUT" FROM DUAL;            --here position is omitted
SELECT SUBSTR('abcdefghijklmnopqrsMasumtuvwxyz',20,5) "SUBSTRING OUTPUT" FROM DUAL;  --substring length is given
--INSTR()
--the instr() returns the position of character from the given string
select instr('MasumBhai of Bangladesh is the great savior of the Milkyway galaxy','of') as col from dual;
select instr('MasumBhai of Bangladesh is the great savior of the Milkyway galaxy','of',12) as col from dual;
--LPAD() & RPAD() for formatting
select lpad('abcdefgh',25,'*') from DUAL;
select rpad('abcdefgh',25,'*') from DUAL;
select rpad('abcdefgh',5,'*') from DUAL;
--TRIM()
--TRIM(source_string) - remove leading & trailing charachters
--Trim({trim_char}|FROM|SOURCE_STRING) - remove specific char
--TRIM(LEADING|TRAILING|BOTH|{trim_char|FROM|SOURCE_STRING}) - remove specific char
select trim('  removing leading space') as result from DUAL;
select trim('removing Trailing space    ') as result from DUAL;
select trim('   removing leading & trailing space    ') as result from DUAL;
select trim(0 from '12025') as result from DUAL; --couldn't do cause 0 is not leading\trailing
select trim(leading 'm' from 'masum') as result from DUAL;
select trim(trailing 'm' from 'masum') as result from DUAL;
select trim(both 'm' from 'masum') as result from DUAL;
select trim(1 from null) as result from dual;
--LTRIM()  used to remove all specified chars from left end side of string
select ltrim('    MasumBhai_Is_Hero') as result from DUAL;
select ltrim('MasumBhai','Masum') as result from DUAL;
select ltrim('0155180xyz48','0123456789') as result from DUAL; --if any number presents in left side of string then trim it
--RTRIM()  used to remove all specified chars from RIGHT end side of string
select rtrim('0155180xyz948','0123456789') as result from DUAL; --if any number presents in right side of string then trim it

--Pseudo-Columns: ALWAYS TRY TO SELECT FROM DUAL
--it behaves like a table column,but is not actually stored in the table.
--You can select from pseudo-columns but can not insert,update or delete their values
--SYSDATE,SYSTIMESTAMP,ROWID,ROWNUM,UID,USER,CURRVAL,NEXTVAL
SELECT SYSDATE,SYSTIMESTAMP FROM DUAL;
SELECT UID,USER FROM DUAL;
CREATE SEQUENCE id_seq
minvalue 1
maxvalue 9999
start with 1
increment by 1
cache 20;
create table tb1 (id number,name varchar(15));
insert into tb1 values (id_seq.nextval,'Masum');
insert into tb1 values (id_seq.nextval,'Abdullah');
insert into tb1 values (id_seq.nextval,'Al');
insert into tb1 values (id_seq.nextval,'Bhai');
insert into tb1 values (id_seq.nextval,'Hero');

select * from TB1; --see that,id muber is increasing
insert into tb1 values (id_seq.currval,'Zero'); --column-num increased but id was same
select * from tb1;
--rowid & rownum
--rowid is unique pseudo number assigned to each row uniquely,yhey never matched on even if is different table
--rownum returns the number of rows for a resultant query
select ROWID,ROWNUM,name from tb1;
select * from tb1 where ROWNUM<=4;
--delete command
delete from tb1 where id= 5;
select * from tb1;
update tb1 set name='Hero' where id=4;
select * from tb1;
--Rename table
rename tb1 to table01;
select * from table01;
-- savepoint & rollback & commit (if commit is used before rollback,then rollback will not affect)
savepoint p1;
--creating sequence
CREATE SEQUENCE seq_id
minvalue 1
maxvalue 9999
start with 1
increment by 1
cache 20;

create table etc (id number,a varchar(10),b varchar(10));
insert into etc  col (id,a,b) values (seq_id.nextval,'Abullah','Masum');
insert into etc  col (id,a,b) values (seq_id.nextval,'Masum','Bhai');
insert into etc  col (id,a,b) values (seq_id.nextval,'Masum','Mollah');
select * from etc;
--commit ;
rollback to savepoint p1;
select * from etc; --that means in my case.datagrip always automatically commited after every change

--creating Tablespace
create tablespace my_space datafile 'C://oraclexe/app/oracle/oradata/XE/my_space.dbf' size 10m;
--creating user
create user MasumBhai identified by Masum6035
default tablespace my_space
temporary tablespace temp
quota unlimited on my_space;
--creating Role
create role station_master;
--Assigining permission to Role
grant create table,create session to station_master;
--Passing Role to User
grant station_master to MasumBhai;
--Now checking if my User can Perform his Role or not
-- connect MasumBhai/Masum6035 (from cmd of sqlcommand)
create table tb2 (id number,name varchar(15));

--Drop User
--drop user MasumBhai (from cmd of sqlcommand)
--Drop Role
--drop role station_master; (from cmd of sqlcommand)
--Drop Tablespace
DROP TABLESPACE my_space
INCLUDING CONTENTS
CASCADE CONSTRAINTS;
--Now Show all Tablespaces
--SELECT TABLESPACE_NAME, STATUS, CONTENTS FROM USER_TABLESPACES;
--Grant Role (everything was done in cmd of sqlcommand)
-- create user villain identified by villain
-- default tablespace system
-- temporary tablespace temp
-- quota unlimited on system;
--
-- create user hero identified by hero
-- default tablespace system
-- temporary tablespace temp
-- quota unlimited on system;
--
-- create role assistent;
--
-- grant create table,create session to assistent;
--
-- grant assistent to hero;
--
-- grant assistent to villain;
--connect hero/hero   --at cmd
-- create table testtb1 (id number,book varchar(15),auther varchar(20));
--Multiple row insert at a time
-- -- select * from testtb1;
-- connect hero/hero
-- create table testtb1 (id number,book varchar(15),auther varchar(20));
-- INSERT ALL
--         INTO testtb1 (id, book, auther) VALUES (1, 'Abdullah', 'Masum')
--         INTO testtb1 (id, book, auther) VALUES (2, 'Humayun', 'Ahmed')
--         INTO testtb1 (id, book, auther) VALUES (3, 'Jk', 'Rowling')
-- SELECT * FROM dual;
--
-- select * from testtb1;
--
-- grant select on testtb1 to villain;
--
-- connect villain/villain
--
-- select * from hero.testtb1;
-- --Now Revoke grant from user
-- connect hero/hero
-- revoke select on testtb1 from villain;
-- -- Drop Role
-- connect system/<Passoword>
-- drop role assistent cascade;
-- --Drop user
-- drop user hero cascade;
-- drop user villain cascade;

--Rules of Precedence
--0. PARENTHESIS FORCE PRECEDENCE
--1.  Arithmatic operator
--2. Concatanation operator
--3. Comparison conditions
--4.. IS [NOT] NULL, LIKE, IN
--5. [NOT] BETWEEN
--6.. NOT LOGICAL CONDITION
--7. AND LOGICAL CONDITION
--8. OR LOGICAL CONDITION
commit ;
