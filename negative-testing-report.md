# Negative Testing Report

## Project: HRMS - Employee Salary Management

**Written by:** Krithika Devadiga
**Date:** June 26, 2026
**Repo:** github.com/KrithikaDevadiga444/mern-employee-salary-management

---

## Purpose

Along with testing the normal user flow, I also tried giving the application unexpected or invalid inputs to see how it handled them.

The goal was to check whether the system could prevent incorrect actions, show proper error messages, and protect important employee and payroll data.

---

## Test 1 - Login with Random Credentials

**What I tried:**

* Random username: `xyz123`
* Random password: `wrongpassword`

**Expected Result:**
The application should reject the login and display an "Invalid username or password" message.

**Actual Result:**
The application logged me into the admin dashboard.

**Observation:**
This exposed a critical authentication issue. The login page accepts any username and password because it isn't connected to backend authentication.

---

## Test 2 - Login with Empty Username and Password

**What I tried:**

* Left both username and password blank.
* Clicked Login.

**Expected Result:**
The application should ask the user to enter both fields.

**Actual Result:**
The page still allowed navigation instead of validating the inputs.

**Observation:**
Basic input validation is missing before login.

---

## Test 3 - Add Employee with Invalid Data

**What I tried:**
I attempted to add a new employee and checked how the form behaved while entering data.

**Expected Result:**
The form should validate the input and save the employee only after all required information is provided correctly.

**Actual Result:**
Clicking Save redirected me back to the login page without saving anything.

**Observation:**
Since the form never reached the backend, I couldn't properly verify field validation because the save functionality itself was broken.

---

## Test 4 - Search Using Invalid Input

**What I tried:**
I searched using employee names, employee IDs, and random text that didn't exist.

**Expected Result:**
The employee list should either filter matching records or show "No results found."

**Actual Result:**
The employee list never changed regardless of the search value.

**Observation:**
The search box accepts input but doesn't perform any filtering.

---

## Test 5 - Generate Payslip Without a Working Backend Action

**What I tried:**
I selected the month, year, and employee, then clicked the "Cetak Slip Gaji" button.

**Expected Result:**
The application should generate or download the employee's payslip.

**Actual Result:**
Nothing happened. No PDF appeared and no network request was sent.

**Observation:**
The button looks functional but isn't connected to any backend process.

---

## Overall Findings

Most of the problems I found followed the same pattern.

The user interface looked complete, but many actions never reached the backend. Instead of showing validation messages or processing requests, some buttons simply redirected to another page or did nothing at all.

This experience reminded me that negative testing is just as important as testing the normal flow. Trying unexpected inputs helped uncover issues that weren't obvious from simply clicking through the application.
