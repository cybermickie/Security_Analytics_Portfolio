SELECT * FROM mydb.employees;
SELECT * FROM employees;
SELECT Task_ID, Task_Name, Status
FROM employees;
SELECT *
FROM employees
ORDER BY Task_Name ASC; 
SELECT *
FROM employees
LIMIT 3;
SELECT DISTINCT Status
FROM employees;
INSERT INTO employees (Task_ID, Task_Name, Office, Status, Notes_Reassignment)
VALUES ('C7', 'Network Security Audit', 'Grace', 'Active', 'Initial check');
SELECT * FROM employees;
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET Status = 'Completed', Notes_Reassignment = 'Audit done'
WHERE Task_ID = 'C7';
SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM employees
WHERE Task_ID = 'C7';
SET SQL_SAFE_UPDATES = 1;
SELECT Task_ID, Task_Name, Office, Status
FROM employees
WHERE Status = 'Active' AND Office = 'Bob';
SELECT Task_ID, Task_Name, Office, Status
FROM employees
WHERE Status = 'Completed' OR Office = 'Grace';
SELECT Task_ID, Task_Name, Office, Status
FROM employees
WHERE Task_ID BETWEEN 'C2' AND 'C5';
SELECT Task_ID, Task_Name, Status
FROM employees
WHERE Status IN ('Active', 'Pending');
SELECT Task_ID, Task_Name
FROM employees
WHERE Task_Name LIKE '%REVIEW';
SELECT Task_ID, Task_Name
FROM employees
WHERE Task_Name LIKE 'Phishing%';
SELECT COUNT(*) AS Total_Tasks
FROM employees;
SELECT MIN(Task_ID) AS First_Task, MAX(Task_ID) AS Last_Task
FROM employees;
SELECT Status, COUNT(*) AS Total
FROM employees
GROUP BY Status;
SELECT Status, COUNT(*) AS Total
FROM employees
GROUP BY Status
HAVING COUNT(*) > 2;
SELECT Status, COUNT(*) AS Task_Count
FROM employees
GROUP BY Status
ORDER BY Task_Count DESC;
SELECT Office, COUNT(*) AS Task_Count
FROM employees
GROUP BY Office
ORDER BY Task_Count DESC;


