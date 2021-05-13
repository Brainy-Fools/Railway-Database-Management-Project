create table information
(
    EMP_ID        VARCHAR2(30),
    NAME          VARCHAR2(40),
    EMAIL         VARCHAR2(50),
    PHONE         VARCHAR2(20),
    DATE_OF_BIRTH DATE,
    JOINING_DATE  DATE,
    SALARY        NUMBER,
    REPORTS_TO    VARCHAR2(30)
);

INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary) VALUES ('2009001','Shahriar Nazim', 'Shahriar@gmail.com', '01845645902', to_date('13-12-1983','DD-MM-YYYY'), to_date('05-4-2009','DD-MM-YYYY'),220000);
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010001','Zohan Hussain', 'Hussain@gmail.com', '01702344833', to_date('21-03-1980','DD-MM-YYYY'), to_date('05-03-2010','DD-MM-YYYY'), 150000, '2009001');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010006','Shafiul Alam', 'Shafiuyl@gmail.com', '01746546911', to_date('05-05-1985','DD-MM-YYYY'), to_date('08-3-2010','DD-MM-YYYY'), 150000, '2009001');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010002','Sajib Sarker', 'Sarker@gmail.com', '01711395840', to_date('17-08-1986','DD-MM-YYYY'), to_date('13-3-2010','DD-MM-YYYY'),120000, '2009001');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2011004','Afroza Begum', 'Afroza@gmail.com', '01724449511', to_date('02-11-1987','DD-MM-YYYY'), to_date('02-1-2011','DD-MM-YYYY'), 140000, '2009001');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2011003','Mahmudul Riad', 'Riad@gmail.com', '01984374861', to_date('12-04-1990','DD-MM-YYYY'), to_date('20-2-2011','DD-MM-YYYY'), 55000, '2010002');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2013005','Sabbir Hossain', 'Sabbir@gmail.com', '01752325891', to_date('21-OCT-1988','DD-MON-YYYY'), to_date('01-1-2013','DD-MM-YYYY'), 75000, '2010001');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2015002','Monirul Hasan', 'Monirul@gmail.com', '01852346128', to_date('22-09-1990','DD-MM-YYYY'), to_date('01-2-2015','DD-MM-YYYY'), 50000, '2013005');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2016001','Shafiul Alam', 'Shafiuyl@gmail.com', '01746546911', to_date('24-10-1994','DD-MM-YYYY'), to_date('17-1-2016','DD-MM-YYYY'), 40000, '2011003');
INSERT INTO information (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2016011','Amena Naznina', 'Amena@gmail.com', '01746512341', to_date('01/14/1998','MM/DD/YYYY'), to_date('01/24/2016','MM/DD/YYYY'), 80000, '2010002');

CREATE TABLE work_info
(
Emp_Id VARCHAR2 (30),
Dept_Name VARCHAR2 (30)
);

INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2010001','Software Engineer');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2010002','UI');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2015002','Data Scientist');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2016001','Tester');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2016011','UI');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2011003','Tester');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2013005','UI');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2011004','Data Scientist');
INSERT INTO work_info (Emp_Id, Dept_Name) VALUES ('2010006','UI');

select * from information;
select * from work_info;
--renaming existing table column
ALTER TABLE information
RENAME COLUMN SALARY TO emp_salary;
--Aggregate Function in Oracle
--avg(x),max(x),min(x),max(distinct x),min(distinct x),sum(x),sum(distinct x),count(x),count(distinct x),count(*),sttdev(x),variance(x)
select avg(emp_salary) from information;
select sum(EMP_SALARY) from information;
select sum(distinct EMP_SALARY) from information;
select count(*) from information;
select count(EMP_SALARY) from information;
select count(distinct EMP_SALARY) from information;
select min(EMP_SALARY) from information;
select min(distinct EMP_SALARY) from information; --if repetition happens then select only distinct value
select max(EMP_SALARY) from information;
select max(distinct EMP_SALARY) from information;
select stddev(EMP_SALARY) from information;
select stddev(distinct EMP_SALARY) from information;
select variance(distinct EMP_SALARY) from information;

--Charachter Funtions
--initcap(data),length(data),substr(data,x,y),instr(data,x),Gtreater(n1.n2,n3..),Least(n1,n2,n3..)
select lower(name) from information;
select initcap(name) from information;
select upper(name) from information;
select least(8,6,5,9,1,4) from DUAL;
select greatest(8,6,5,9,1,4) from dual;
--substr() & instr() i have done in Brief_Intro.sql

--Number Functions in oracle
--abs(data),ceil(data),floor(data),LN(data),LOG(b,data),MOD(data,y),Power(data,y),Round(data,y),SQRT(data),Trunc(data,n)
select abs(EMP_SALARY) from INFORMATION;
select ceil(EMP_SALARY) from INFORMATION;
select floor(EMP_SALARY) from INFORMATION;
select ln(EMP_SALARY) from INFORMATION; --natarul logarithm
select log(10,EMP_SALARY) from INFORMATION; --logarithm with base
select mod(EMP_SALARY,100) from INFORMATION;  --returns modulous
select round(EMP_SALARY,2) from INFORMATION; --upto point 2 here
select sqrt(EMP_SALARY) from INFORMATION;
select trunc(EMP_SALARY,0) from INFORMATION; --if decimal point happens then truncate upto 0 point here

--Conversion function
select NAME,to_char(DATE_OF_BIRTH,'yyyy') from information;
select NAME,to_char(DATE_OF_BIRTH,'mm') from information;
select NAME,to_char(DATE_OF_BIRTH,'dd') from information;
select NAME,to_char(DATE_OF_BIRTH) from information;
select NAME,to_char(DATE_OF_BIRTH,'yyyy-mm') from information;
--nvl()
select EMP_ID,name,REPORTS_TO from information; --here one null value is here
select EMP_ID,name,nvl(REPORTS_TO,'MasumBoss') from information; --now look into it
--decode()
select EMP_ID,name,decode(EMP_ID,2009001,'Manager',2010001,'Duty Officer',2010006,'Recently Joined',2010002,'On Leave',2011003,'Peon',2015002,'Night Shift',2013005,'Newly Married',2016001,'Secretary','Yess,No Boyfriend!') as "decoded emp_id" from information;

--date Functions
-- add_month(date,count),last_day(date),months_between(date1,date2),Next_Day(date,'day'),To_date(string),New_Time(date,z1,z2)
select name,DATE_OF_BIRTH from information;  --see Shahriar Nazim's birthday was 1983
select name,add_months(DATE_OF_BIRTH,1) from information; --now Shahriar Nazim's birthday 1984 (1 month increase) for each
select name,last_day(DATE_OF_BIRTH) from information;  --it gives last day of each month
select name,next_day(DATE_OF_BIRTH,7) from information;  --it gives the day after specified day(1~7)
select name,months_between((select DATE_OF_BIRTH from information where EMP_ID=2016001),(select DATE_OF_BIRTH from information where EMP_ID=2009001)) from information ;

