--alter table
select * from EMP2013;
alter table EMP2013 add (pincode varchar2(10));
update EMP2013 set EMP2013.pincode='DHA-1230' where EMP2013.NAME='hero';

alter table EMP2013 add (country varchar2(20),city varchar2(20));
update EMP2013 set EMP2013.country='Bangladesh',EMP2013.city='vinland';
--drop column (except primary key contains column)
alter table EMP2013 drop column country;
--let's optimize our time
alter table EMP2013 set unused column city;
select * from EMP2013;--city column is present but hidden
--now we will permanently delete the column
alter table EMP2013 drop unused columns; --all unused columns will be dropped instantly

--alter table modify
select * from EMP2013;
--alter table EMP2013 modify (name varchar2(32))
--but to decrease length the column should be empty
--change default value


--
CREATE TABLE Employee
(
Emp_Id VARCHAR2 (30),
Name VARCHAR2 (40),
Email VARCHAR2 (50),
Phone VARCHAR2 (20),
Date_of_Birth Date,
Joining_Date Date,
Salary NUMBER,
Reports_to VARCHAR2 (30)
);

INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary) VALUES ('2009001','Shahriar Nazim', 'Shahriar@gmail.com', '01845645902', to_date('13-12-1983','DD-MM-YYYY'), to_date('05-4-2009','DD-MM-YYYY'),220000);
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010001','Zohan Hussain', 'Hussain@gmail.com', '01702344833', to_date('21-03-1980','DD-MM-YYYY'), to_date('05-03-2010','DD-MM-YYYY'), 150000, '2009001');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010006','Shafiul Alam', 'Shafiuyl@gmail.com', '01746546911', to_date('05-05-1985','DD-MM-YYYY'), to_date('08-3-2010','DD-MM-YYYY'), 150000, '2009001');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2010002','Sajib Sarker', 'Sarker@gmail.com', '01711395840', to_date('17-08-1986','DD-MM-YYYY'), to_date('13-3-2010','DD-MM-YYYY'),120000, '2009001');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2011004','Afroza Begum', 'Afroza@gmail.com', '01724449511', to_date('02-11-1987','DD-MM-YYYY'), to_date('02-1-2011','DD-MM-YYYY'), 140000, '2009001');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2011003','Mahmudul Riad', 'Riad@gmail.com', '01984374861', to_date('12-04-1990','DD-MM-YYYY'), to_date('20-2-2011','DD-MM-YYYY'), 55000, '2010002');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2013005','Sabbir Hossain', 'Sabbir@gmail.com', '01752325891', to_date('21-OCT-1988','DD-MON-YYYY'), to_date('01-1-2013','DD-MM-YYYY'), 75000, '2010001');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2015002','Monirul Hasan', 'Monirul@gmail.com', '01852346128', to_date('22-09-1990','DD-MM-YYYY'), to_date('01-2-2015','DD-MM-YYYY'), 50000, '2013005');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2016001','Shafiul Alam', 'Shafiuyl@gmail.com', '01746546911', to_date('24-10-1994','DD-MM-YYYY'), to_date('17-1-2016','DD-MM-YYYY'), 40000, '2011003');
INSERT INTO Employee (Emp_Id, Name, Email, Phone, Date_of_Birth, Joining_Date, Salary, Reports_to) VALUES ('2016011','Amena Naznina', 'Amena@gmail.com', '01746512341', to_date('01/14/1998','MM/DD/YYYY'), to_date('01/24/2016','MM/DD/YYYY'), 80000, '2010002');

CREATE TABLE Has_Token
(
Emp_Id VARCHAR2 (30),
Leave_Id VARCHAR2 (30)
);

INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2010001','0000001');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2011003','0000002');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2010002','0000003');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2013005','0000004');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2010002','0000005');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2009001','0000006');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2011003','0000007');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2009001','0000008');
INSERT INTO Has_Token (Emp_Id, Leave_Id) VALUES ('2016011','0000009');

CREATE TABLE Leave
(
Leave_Id VARCHAR2 (30),
Start_date DATE,
End_date DATE,
Leave_Reason VARCHAR2 (40)
);

INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000001', to_date('13-12-2012','DD-MM-YYYY'), to_date('15-12-2012','DD-MM-YYYY'), 'Fever');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000002', to_date('02-03-2013','DD-MM-YYYY'), to_date('06-03-2013','DD-MM-YYYY'), 'Family holiday');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000003', to_date('09-10-2013','DD-MM-YYYY'), to_date('22-10-2013','DD-MM-YYYY'), 'Wedding');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000004', to_date('17-04-2014','DD-MM-YYYY'), to_date('1-05-2014','DD-MM-YYYY'), 'Dengu Fever');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000005', to_date('16-09-2014','DD-MM-YYYY'), to_date('19-09-2014','DD-MM-YYYY'), 'Fever');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000006', to_date('02-01-2015','DD-MM-YYYY'), to_date('09-01-2015','DD-MM-YYYY'), 'Family Holiday');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000007', to_date('12-02-2015','DD-MM-YYYY'), to_date('25-02-2015','DD-MM-YYYY'), 'Wedding');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000008', to_date('12-02-2015','DD-MM-YYYY'), to_date('15-02-2015','DD-MM-YYYY'), 'Fever');
INSERT INTO Leave (Leave_Id, Start_date, End_date, Leave_Reason) VALUES ('0000009', to_date('24-07-2017','DD-MM-YYYY'), to_date('05-08-2017','DD-MM-YYYY'), 'Wedding');

select * from Employee;
select * from Leave;
select * from Has_Token;
--alter integrity constraints
alter table EMPLOYEE add primary key (EMP_ID);
alter table EMPLOYEE drop primary key;
--this is used when primary key is dependent to another table (then use cascade command)
alter table EMPLOYEE drop primary key cascade;
--foreign key
alter table LEAVE add primary key(LEAVE_ID);
alter table EMPLOYEE add primary key (EMP_ID);
--(on delete cascade) if references tables data is deleted then child's tables data will also be deleted
alter table HAS_TOKEN add foreign key (LEAVE_ID) references LEAVE on delete cascade;
--same but adding constraints using alter and constraint name
alter table HAS_TOKEN add constraint leave_fk foreign key (LEAVE_ID) references LEAVE on delete set null ; --jere _fk  and  _pk plays eminent role

--sequence create
create sequence emp_table_id_seq
minvalue 1
start with 1
increment by 1
cache 20;

update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Shahriar Nazim';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Zohan Hussain';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Shafiul Alam';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Sajib Sarker';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Afroza Begum';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Mahmudul Riad';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Sabbir Hossain';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Monirul Hasan';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Shafiul Alam';
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Amena Naznina';

--alter sequence
alter sequence emp_table_id_seq increment by 3;
update EMPLOYEE set employee.emp_id = emp_table_id_seq.nextval where Employee.NAME = 'Amena Naznina';
--drop sequence
drop sequence emp_table_id_seq;

-- Create, Alter and Drop for named constraint
alter table EMPLOYEE add constraint checksalary check ( SALARY between 50000 and 150000);
--this will show check constraint violated
