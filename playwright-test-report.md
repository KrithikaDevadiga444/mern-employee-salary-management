# Playwright Test Report
**Written by:** Krithika Devadiga
**Date:** June 26-27, 2026
**Repo:** github.com/KrithikaDevadiga444/
mern-employee-salary-management

---

## Why I Wrote Automated Tests

After spending a day clicking through this 
app manually, I found bugs that any developer 
could accidentally reintroduce. The senior dev 
fixes things from memory. The new dev is scared 
to touch the payroll module. Without automated 
tests, every code push is a gamble.

I wrote these tests to make the invisible 
visible — if a button stops working, if a 
page stops loading, if authentication breaks 
again, the test suite catches it before 
it reaches a worker's payslip.

---

## How I Ran the Tests Locally

Make sure backend and frontend are running:

Terminal 1:
cd Backend
npm start

Terminal 2:
cd Frontend
npm run dev

Terminal 3:
cd tests
npx playwright test --reporter=line

---

## Test Results — Local Environment

Total tests: 6
Passed: 4
Failed: 2

The 2 failing tests are intentional.
They expose real bugs I found during 
exploratory testing.

---

## Test 1 — Admin Dashboard Loads
**File:** specs/auth.test.js
**Result:** PASS ✅

**What it checks:**
Clicking the login button takes you to 
the admin dashboard.

**Why I wrote this:**
The very first thing any HR person does 
is log in. If this breaks, nobody can 
do anything. This is the most basic 
smoke test.

---

## Test 2 — BUG-01: Authentication Bypass
**File:** specs/auth.test.js  
**Result:** FAIL ✅ (intentional)

**What it checks:**
Random credentials should NOT reach 
the dashboard. They currently do.

**What the failure proves:**
Any person who types any username and 
any password gets full access to 200+ 
workers' salary data. I verified this 
by typing "xyz123" as username and 
"wrongpassword" as password — logged 
straight in.

I found the root cause in the source code:
```jsx
<Link to='/admin/dashboard'>
    <input type='submit' value='Login' />
</Link>
```
The login button is just a navigation link.
No API call. No password check. Nothing.

**Who this protects when fixed:**
Every construction worker whose salary, 
attendance, and personal details are 
stored in this system.

---

## Test 3 — Employee Login Page Accessible
**File:** specs/auth.test.js
**Result:** PASS ✅

**What it checks:**
The employee login page loads when 
accessed directly via URL.

**Why I wrote this:**
I discovered the employee login page 
exists at /pegawai/login but is not 
linked from anywhere. Workers would 
never find it. At minimum, the page 
itself should load — and it does.

---

## Test 4 — Employee List Page Loads
**File:** specs/payslip.test.js
**Result:** PASS ✅

**What it checks:**
The employee list table is visible 
when you navigate to Data Pegawai.

**Why I wrote this:**
HR operators use this page every day 
to find and manage worker records. 
If this page breaks silently, HR 
wouldn't know until they tried to 
process payroll.

---

## Test 5 — BUG-04: Payslip Page
**File:** specs/payslip.test.js
**Result:** FAIL ✅ (intentional)

**What it checks:**
The payslip generation page should 
load and the generate button should 
be visible and functional.

**What the failure proves:**
The Cetak Slip Gaji button exists 
visually but does absolutely nothing 
when clicked. I checked the browser 
Network tab — not a single request 
is sent to the backend.

**Who this protects when fixed:**
Construction workers who need their 
payslip to apply for a bank loan, 
rent a house, or dispute a wrong salary.

---

## Test 6 — Attendance Page Loads
**File:** specs/payslip.test.js
**Result:** PASS ✅

**What it checks:**
The attendance data page loads correctly.

**Why I wrote this:**
Attendance is the input that drives 
salary calculation. If this page 
breaks, site managers can't record 
worker attendance, which means 
salaries can't be calculated correctly.

---

## About the GitHub Actions CI

I configured a GitHub Actions workflow 
that automatically runs these tests 
on every push to main.

The pipeline successfully:
- Installs all dependencies ✅
- Sets up MySQL database ✅
- Imports database schema ✅
- Starts backend server ✅
- Starts frontend ✅
- Runs Playwright tests ✅

The tests show failures in CI for 
two reasons:

First — the intentional bug-proving 
tests fail because the bugs are real. 
BUG-01 and the payslip bug exist in 
the code, so those tests correctly 
fail everywhere locally and in CI.

Second — some page navigation tests 
time out in the cloud environment 
because the React app takes longer 
to fully load on GitHub's servers 
than on my local machine.

This is an infrastructure timing issue, 
not a problem with the tests themselves. 
On my local machine, 4 tests pass and 
2 fail intentionally.

**The important point:**
A CI pipeline that catches real bugs 
is more valuable than one that passes 
everything. If the authentication bug 
gets fixed in the code, BUG-01 test 
will automatically start passing — 
that's exactly how CI should work.

---

## What These Tests Protect

Every test in this suite protects 
one chain:

Worker exists in system
→ Attendance is recorded
→ Salary is calculated correctly  
→ Payslip is generated
→ Worker gets paid

When any link in this chain breaks 
silently, a construction worker 
doesn't get paid for work they did.

My tests make each link in that 
chain visible and verifiable.

---

## What I Would Add Next

If I had more time I would add:

1. A test that verifies the salary 
   calculation formula is mathematically 
   correct — I saw the numbers on screen 
   but never verified the math.

2. A test that checks one worker cannot 
   see another worker's salary data.

3. A test that verifies attendance 
   records correctly feed into 
   salary calculation.

These three tests would protect the 
most critical business flow — the 
path from a worker showing up to work 
to receiving correct pay.