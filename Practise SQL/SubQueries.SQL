--order by clause subquerie te apply kora jaay na
--single row operator  : =,>,<,<=,>=,<>
--multiple row operator :
--multiple column operator :

Create table Customer
(
	Cust_id 	VARCHAR2(12)  NOT NULL,
	Cust_name	VARCHAR2(12),
	Cust_dob	DATE,
	Cust_street	VARCHAR2(12),
	Cust_city	VARCHAR2(12)
);

Create table Account
(
	Account_id 	VARCHAR2(12)  NOT NULL,
	Balance		NUMBER(20,5),
	Type		VARCHAR2(8)
);

Create table Branch
(
	Branch_name	VARCHAR2(14)  NOT NULL,
	Branch_city	VARCHAR2(10),
	Assets		NUMBER(20,5)
);

Create table Employee
(
	Employee_id	VARCHAR2(12),
	Employee_name	VARCHAR2(20),
	Employee_dob	DATE,
	Employee_street	VARCHAR2(20),
	Employee_city	VARCHAR2(20),
	Employee_startdate DATE,
	Salary		NUMBER(10,3),
	MGR		VARCHAR2(12)
);

Create table SALGRADE
(
	GRADE	VARCHAR2(5)  NOT NULL,
	LOSAL	NUMBER(10,3),
	HISAL	NUMBER(10,3)
);

Create table Loan
(
	Loan_id 	VARCHAR2(12)  NOT NULL,
	Amount		NUMBER(20,5)
);
Create table Return
(
	Payment_id 	VARCHAR2(12)  NOT NULL,
	Loan_id 	VARCHAR2(12)  NOT NULL
);

Create table Loan_return
(
	Payment_id 	VARCHAR2(12)  NOT NULL,
	Payment_amount	NUMBER(20,5),
	Payment_date	Date
);

Create table InfoTran
(
	Transaction_id	 VARCHAR2(20) NOT NULL,
	Transaction_date DATE,
	Type		 VARCHAR2(8),
	Amount		 NUMBER(20,5)
);

Create table Transaction
(
	Transaction_id	 VARCHAR2(20) NOT NULL,
	Account_id	 VARCHAR2(12) NOT NULL
);
Create table Borrower
(
	Cust_id 	VARCHAR2(12)  NOT NULL,
	Loan_id 	VARCHAR2(12)  NOT NULL
);
Create table Depositor
(
	Cust_id 	VARCHAR2(12)  NOT NULL,
	Account_id	 VARCHAR2(12) NOT NULL
);

Create table Cust_banker
(
	Customer_id 	VARCHAR2(12)  NOT NULL,
	Employee_id	VARCHAR2(12)  NOT NULL
);
Create table Loan_Branch
(
	Loan_id 	VARCHAR2(12)  NOT NULL,
	Branch_name	VARCHAR2(14)  NOT NULL
);

Insert into Employee values('E00000000001','E_A',TO_DATE('11-JAN-1982','DD-MON-YYYY'),'e_street_006', 'e_city_001','11-JAN-0002',5000,'');
Insert into Employee values('E00000000002','E_B',TO_DATE('22-JAN-1958','DD-MON-YYYY'),'e_street_005', 'e_city_002','22-JAN-1978',2850,'E00000000001');
Insert into Employee values('E00000000003','E_C',TO_DATE('23-FEB-1962','DD-MON-YYYY'),'e_street_007', 'e_city_003','23-FEB-1982',2000,'E00000000001');
Insert into Employee values('E00000000004','E_D',TO_DATE('24-FEB-1964','DD-MON-YYYY'),'e_street_004', 'e_city_004','24-FEB-1984',5300,'E00000000001');
Insert into Employee values('E00000000005','E_E',TO_DATE('25-OCT-1956','DD-MON-YYYY'),'e_street_004', 'e_city_005','25-OCT-1976',6500,'E00000000001');
Insert into Employee values('E00000000006','E_F',TO_DATE('26-NOV-1982','DD-MON-YYYY'),'e_street_003', 'e_city_006','26-NOV-0002',1700,'E00000000007');
Insert into Employee values('E00000000007','E_G',TO_DATE('27-DEC-1975','DD-MON-YYYY'),'e_street_002', 'e_city_007','27-DEC-1995',9000,'');
Insert into Employee values('E00000000008','E_H',TO_DATE('28-MAR-1978','DD-MON-YYYY'),'e_street_002', 'e_city_008','28-MAR-1998',5000,'E00000000007');
Insert into Employee values('E00000000009','E_I',TO_DATE('27-MAR-1974','DD-MON-YYYY'),'e_street_001', 'e_city_009','27-MAR-1994',4000,'E00000000007');
Insert into Employee values('E00000000010','E_J',TO_DATE('21-APR-1956','DD-MON-YYYY'),'e_street_018', 'e_city_010','21-APR-1986',5600,'E00000000007');
Insert into Employee values('E00000000011','E_K',TO_DATE('21-APR-1974','DD-MON-YYYY'),'e_street_017', 'e_city_001','21-APR-1994',1400,'E00000000007');
Insert into Employee values('E00000000012','E_L',TO_DATE('19-APR-1979','DD-MON-YYYY'),'e_street_016', 'e_city_002','19-APR-1999',5600,'E00000000008');
Insert into Employee values('E00000000013','E_M',TO_DATE('29-APR-1974','DD-MON-YYYY'),'e_street_015', 'e_city_003','29-APR-1994',9900,'E00000000008');
Insert into Employee values('E00000000014','E_N',TO_DATE('18-MAY-1976','DD-MON-YYYY'),'e_street_014', 'e_city_004','18-MAY-1996',1000,'');
Insert into Employee values('E00000000015','E_O',TO_DATE('17-MAY-1973','DD-MON-YYYY'),'e_street_013', 'e_city_005','17-MAY-1993',5000,'E00000000014');
Insert into Employee values('E00000000016','E_P',TO_DATE('14-MAY-1982','DD-MON-YYYY'),'e_street_012', 'e_city_006','14-MAY-0002',2200,'E00000000014');
Insert into Employee values('E00000000017','E_Q',TO_DATE('11-MAY-1980','DD-MON-YYYY'),'e_street_011', 'e_city_007','11-MAY-2000',3500,'E00000000014');
Insert into Employee values('E00000000018','E_R',TO_DATE('23-JUN-1982','DD-MON-YYYY'),'e_street_010', 'e_city_008','23-JUN-0002',1500,'E00000000014');
Insert into Employee values('E00000000019','E_S',TO_DATE('26-JUN-1981','DD-MON-YYYY'),'e_street_009', 'e_city_009','26-JUN-0001',4000,'E00000000014');
Insert into Employee values('E00000000020','E_T',TO_DATE('22-JUN-1981','DD-MON-YYYY'),'e_street_008', 'e_city_010','22-JUN-0001',7900,'E00000000014');
Insert into Employee values('E00000000021','E_U',TO_DATE('27-JUL-1981','DD-MON-YYYY'),'e_street_007', 'e_city_001','27-JUL-0001',5000,'E00000000014');
Insert into Employee values('E00000000022','E_V',TO_DATE('24-JUL-1974','DD-MON-YYYY'),'e_street_006', 'e_city_002','24-JUL-1994',5700,'E00000000014');
Insert into Employee values('E00000000023','E_W',TO_DATE('15-AUG-1977','DD-MON-YYYY'),'e_street_005', 'e_city_003','15-AUG-1997',5400,'E00000000026');
Insert into Employee values('E00000000024','E_X',TO_DATE('17-AUG-1978','DD-MON-YYYY'),'e_street_004', 'e_city_004','17-AUG-1998',4000,'E00000000014');
Insert into Employee values('E00000000025','E_Y',TO_DATE('20-SEP-1979','DD-MON-YYYY'),'e_street_003', 'e_city_005','20-SEP-1999',6600,'E00000000026');
Insert into Employee values('E00000000026','E_Z',TO_DATE('01-SEP-1972','DD-MON-YYYY'),'e_street_001', 'e_city_006','01-SEP-1992',1500,'');

insert into account values('A-101',500, 'CURRENT');
insert into account values('A-215',700, 'CURRENT');
insert into account values('A-102',400, 'CURRENT');
insert into account values('A-305',350, 'CURRENT');
insert into account values('A-201',900, 'CURRENT');
insert into account values('A-222',700, 'CURRENT');
insert into account values('A-217',750, 'CURRENT');

insert into customer values('C00000000001','Jones',TO_DATE('11-JAN-1982','DD-MON-YYYY'),'Main','Harrison');
insert into customer values('C00000000002','Smith',TO_DATE('22-JAN-1958','DD-MON-YYYY'),'North','Rye');
insert into customer values('C00000000003','Hayes',TO_DATE('23-FEB-1962','DD-MON-YYYY'),'Main','Harrison');
insert into customer values('C00000000004','Curry',TO_DATE('24-FEB-1964','DD-MON-YYYY'),'North','Rye');
insert into customer values('C00000000005','Lindsay',TO_DATE('25-OCT-1956','DD-MON-YYYY'),'Park','Pittsfield');
insert into customer values('C00000000006','Turner',TO_DATE('26-NOV-1982','DD-MON-YYYY'),'Putnam','Stamford');
insert into customer values('C00000000007','Williams',TO_DATE('27-DEC-1975','DD-MON-YYYY'),'Nassau','Princeton');
insert into customer values('C00000000008','Adams',TO_DATE('28-MAR-1978','DD-MON-YYYY'),'Spring','Pittsfield');
insert into customer values('C00000000009','Johnson',TO_DATE('27-MAR-1974','DD-MON-YYYY'),'Alma','Palo alto');
insert into customer values('C00000000010','Glenn',TO_DATE('21-APR-1956','DD-MON-YYYY'),'Sand Hill','Woodside');
insert into customer values('C00000000011','Brooks',TO_DATE('21-APR-1974','DD-MON-YYYY'),'Senator','Brooklyn');
insert into customer values('C00000000012','Green',TO_DATE('19-APR-1979','DD-MON-YYYY'),'Walnut','Stamford');

insert into depositor values('C00000000001','A-101');
insert into depositor values('C00000000002','A-215');
insert into depositor values('C00000000003','A-102');
insert into depositor values('C00000000004','A-305');
insert into depositor values('C00000000001','A-201');
insert into depositor values('C00000000005','A-217');
insert into depositor values('C00000000006','A-222');


select * from Employee;
select * from Customer;
select * from Depositor;
select * from Account;


--outer table and inner queries table are same
select EMPLOYEE_NAME,Employee_city from EMPLOYEE where Employee_city = (select Employee_city from Employee where Employee_id = 'E00000000004');
--outer table and inner queries table are different
select Employee_name,Employee_dob from Employee where Employee_dob =
(select CUST_DOB from Customer where Cust_id = 'C00000000010');
--single row operator with and
SELECT Employee_name
From Employee
Where Employee_city= ( SELECT Employee_city
From Employee
Where Employee_id='E00000000004')
AND Salary > (SELECT AVG(Salary)
FROM EMPLOYEE);
-- practise problem
select SALARY from Employee where Salary = (select min(Salary) from Employee);
--to display all the employee's city that have minimum salary greater than that of employee city 'e_city_001'
select MIN(Salary) from Employee where Employee_city='e_city_001';
--group by
select Employee_city,min(Salary) from Employee group by Employee_city;
--having clause
select Employee_city,min(Salary) from Employee group by Employee_city having min(Salary) > (select min(Salary) from Employee where Employee_city='e_city_001');
-- normal in operator
SELECT Employee_name, Employee_city, salary FROM EMPLOYEE WHERE SALARY IN (1400, 2850, 2000, 1000);
--finding error of problem
SELECT EMPLOYEE_NAME, EMPLOYEE_CITY,SALARY
FROM EMPLOYEE
WHERE SALARY= (SELECT MIN(SALARY) FROM EMPLOYEE GROUP BY EMPLOYEE_CITY);
-- it will give single-row subquery returns more than one row
--solution
SELECT EMPLOYEE_NAME, EMPLOYEE_CITY,SALARY
FROM EMPLOYEE
WHERE SALARY in (SELECT MIN(SALARY) FROM EMPLOYEE GROUP BY EMPLOYEE_CITY);

/*--Find all the employee’s Name, ID, city and
Salary who have the salary more than the
maximum salary grouped by Employee’s
city.*/

select EMPLOYEE_NAME,Employee_id,Employee_city,Salary
from Employee
where Salary > any(select min(Salary) from Employee group by Salary);

-- --another prblem
-- Find all the employee‟s Name, ID, city and
-- Salary who have the salaries more than the
-- Average salaries of all Employees grouped by
-- Employee‟s city.
SELECT Employee_name,Employee_id,Employee_city,Salary FROM employee
WHERE salary >
ALL(SELECT avg(salary)FROM employee GROUP BY Employee_city);

-- -- another problem
-- Find all the employee‟s Name, ID, city and
-- Salary who have the salary more than the
-- maximum salary grouped by Employee‟s city.
select Employee_name,Employee_id,Employee_city,salary from employee 
where salary >
any(select max(salary) from employee group by Employee_city); 
 
-- -- another problem
--  Find all the employee‟s Name, ID and Salary
-- who have the salaries more than the Average
-- salaries of all Employees grouped by
-- Employee‟s city.
select Employee_name,Employee_id,Employee_city,salary from employee
where SALARY > any
(SELECT AVG(SALARY) FROM EMPLOYEE
GROUP BY Employee_city);

-- -- another problem
-- Find all the employee‟s Name, ID and Salary who
-- have the salaries more than the Average salaries of
-- all Employees grouped by Employee‟s city.
SELECT Employee_name, Salary, Employee_City FROM EMPLOYEE
WHERE SALARY > ALL
(SELECT AVG(SALARY) FROM EMPLOYEE GROUP BY Employee_city);

-- -- another problem
-- Create a query to display the Cust_ID and the CUST_NAME for all
-- the customers who have the balance less than the Average salaries
-- of all Employees grouped by Employee‟s city.
select Cust_id,CUST_NAME,BALANCE from Customer natural join Depositor natural join ACCOUNT
where Balance < all (select avg(Salary) from Employee group by Employee_city);
-- This Oracle EXISTS condition example will return
-- all records from the customers table where there is at
-- least one record in the Depositor table with the
-- matching customer_id.
--exists
-- syntax : where exists (subquery)
select * from Customer where exists(select * from Depositor where Customer.Cust_id=Depositor.Cust_id);

--previous queries all information i want to store in another table
create table fetched_table
as select * from Customer
where exists(select * from Depositor where Customer.Cust_id=Depositor.Cust_id);

select * from fetched_table;
