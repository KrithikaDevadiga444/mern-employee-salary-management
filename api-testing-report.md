# API Testing Report

## Project: HRMS - Employee Salary Management

**Written by:** Krithika Devadiga
**Date:** June 26, 2026
**Repo:** github.com/KrithikaDevadiga444/mern-employee-salary-management

---

## Why I Looked at the APIs

While testing the application through the browser, I noticed that some important features were not working as expected. Instead of assuming the problem was only in the user interface, I looked at the backend routes to understand how the application was supposed to work.

I focused mainly on the employee and authentication APIs because they are the most important parts of an HRMS. If these APIs fail, employees cannot log in, HR cannot manage employee records, and payroll cannot work correctly.

---

# API 1 - Authentication

**Endpoint**

`POST /login`

### Happy Path

**Expected**

* User enters valid username and password.
* Login succeeds.
* User is redirected to the correct dashboard.

**What I Found**

During browser testing, the application accepted random usernames and passwords because the frontend Login button was only a navigation link and was not connected to the backend authentication API.

**Result**

Fail

---

### Validation Testing

I considered these invalid inputs:

* Empty username
* Empty password
* Random username
* Random password

**Expected**

The API should reject invalid credentials and display an error message.

**Actual**

The application still allowed access to the dashboard.

**Result**

Fail

---

### Business Rule

Only authenticated users should be allowed to access employee and payroll information.

**Actual**

Authentication was bypassed, allowing unauthorized access.

**Result**

Fail

---

### Error Handling

If login fails, the system should return a meaningful error such as "Invalid username or password."

I could not observe proper error handling because authentication was never actually performed from the frontend.

---

# API 2 - Employee Management

**Endpoint**

`POST /data_pegawai`

### Happy Path

**Expected**

Submitting a valid employee form should create a new employee record.

**Actual**

After clicking Save, the application redirected back to the login page and no employee was created.

**Result**

Fail

---

### Validation Testing

I considered several invalid inputs such as:

* Missing employee name
* Missing employee ID
* Empty required fields
* Invalid employee information

**Expected**

The application should prevent submission and display validation messages.

**Actual**

Since the request never reached the backend, validation could not be verified.

---

### Business Rule

Every employee should have complete information before being added to the system.

Because the employee was never created, this business rule could not be confirmed.

---

### Error Handling

Instead of showing a useful message explaining why the employee could not be saved, the application redirected to the login page.

This makes troubleshooting difficult for both HR staff and developers.

---

# API 3 - Employee List

**Endpoint**

`GET /data_pegawai`

### Happy Path

**Expected**

The employee list should return all registered employees.

**Actual**

The employee list displayed existing records successfully.

**Result**

Pass

---

### Business Rule

Only authorized administrators should be able to access the complete employee list.

Because authentication was not functioning correctly, this business rule could not be trusted.

---

# Overall Findings

While reviewing the backend routes and testing the application, I noticed that many of the backend APIs already exist. However, some important frontend pages are not properly connected to them.

The biggest issue is not that the APIs are missing. The bigger issue is that several user actions never reach the backend at all. Buttons appear to work, but no request is sent, so the backend never gets the chance to process the action.

---

# Conclusion

From a QA perspective, the backend structure is present, but the connection between the frontend and backend is incomplete in several important places.

The highest priority issues are:

* Authentication is bypassed.
* Employee creation does not reach the backend.
* Some buttons perform navigation instead of calling APIs.

These problems should be fixed before adding new features because they affect the core functionality of the HRMS and directly impact employee salary management.
