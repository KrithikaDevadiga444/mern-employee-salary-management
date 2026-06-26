# Test Strategy
## Project: HRMS - Employee Salary Management
**Written by:** Krithika Devadiga
**Date:** June 25, 2026
**Repo:** github.com/KrithikaDevadiga444/
mern-employee-salary-management

---

## Why I Wrote This Strategy

Before I started testing, I spent time just 
clicking through the app like a real user would.
No checklist. No plan. Just exploring.

What I found scared me more than I expected.

The login page — the very first thing any user 
sees it accepts any username and any password. 
Anyone can walk in. Once inside, they can see 
every worker's salary, every attendance record, 
every personal detail. And when I tried to add 
a new employee, the save button sent me back to 
the login page. Nothing saved. The backend never 
even received the request.

This system is being used to pay construction 
workers — people earning ₹15,000–25,000 a month 
who depend on that money for food, rent, and 
their children's school fees. A broken save 
button isn't a UI glitch. It means a worker 
doesn't get added to the system, their 
attendance doesn't get tracked, and they 
don't get paid.

That's why I wrote this test strategy the 
way I did — starting from who gets hurt, 
not from what's easiest to test.

---

## The System I Tested

This HRMS manages employee data, attendance, 
salary calculation, and payslip generation 
for a construction company.

**Key screens I tested:**
- Admin Login (`/admin/login`)
- Employee Login (`/pegawai/login`)
- Employee List — Data Pegawai
- Add Employee Form — Form Data Pegawai
- Attendance — Data Absensi
- Salary Settings — Setting Potongan Gaji
- Salary Data — Data Gaji
- Salary Report — Laporan Gaji
- Payslip — Slip Gaji
- Employee Dashboard — `/pegawai/dashboard`

**Tech Stack:**
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MySQL (Sequelize ORM)
- Auth: Session based (express-session)

---

## What I Found Before Writing Any Test

I opened the login component source code 
and found this:

```jsx
<Link to='/admin/dashboard'>
    <input type='submit' value='Login' />
</Link>
```

The login button is a navigation link. 
No API call. No password check. Nothing.

This one finding changed my entire strategy. 
It told me the frontend and backend were 
built separately and never properly connected. 
Every feature I tested after that confirmed 
the same pattern — buttons that look real 
but do nothing.

---

## My Testing Priority — Ranked by Who Gets Hurt

I didn't rank by what was easiest to test. 
I ranked by what would hurt a real person 
most if it broke in production.

### Priority 1 — Authentication (CRITICAL)
**Why first:** If anyone can log in with 
any credentials, every other test is pointless. 
Security is the foundation. Without it, 
200 workers' salary data is exposed to anyone 
with the URL.

**What I test:**
- Can random credentials log in?
- Does wrong password show error?
- Can one employee see another's data?
- Is the employee login page even reachable?

**Who gets hurt if this fails:**
Every construction worker whose salary, 
attendance, and personal details are in 
the system.

---

### Priority 2 — Employee Onboarding (CRITICAL)
**Why second:** If HR cannot add a new worker 
to the system, that worker doesn't exist 
in the database. No record = no attendance 
tracking = no salary = worker does all their 
work and gets nothing.

**What I test:**
- Does Add Employee form actually save data?
- Does backend receive the request?
- What happens with empty fields?
- What happens with invalid data?

**Who gets hurt if this fails:**
New construction workers who just joined 
the site and are waiting for their first salary.

---

### Priority 3 — Payslip Generation (CRITICAL)
**Why third:** The payslip is the final proof 
that the system worked. Workers need it for 
bank loans, house rent, salary disputes. 
If the button does nothing, the worker has 
no financial evidence of what they earned.

**What I test:**
- Does Cetak Slip Gaji button generate PDF?
- Does it send a request to backend?
- Does the correct worker's data appear?

**Who gets hurt if this fails:**
Every worker who needs to prove their income 
— for a loan, for renting a house, 
for disputing a wrong salary.

---

### Priority 4 — Salary Calculation (HIGH)
**Why fourth:** I saw salary numbers on screen 
but never verified the formula. Basic salary 
+ allowances - deductions = total salary. 
A silent calculation error would affect 
every worker every month.

**What I test:**
- Does the math actually add up correctly?
- What happens if deduction > salary?
- Can salary be set to zero or negative?

---

### Priority 5 — Search and Navigation (MEDIUM)
**Why fifth:** The search box on employee list 
doesn't filter results. In a company with 
200+ workers, payroll operators need to find 
specific workers quickly at month end. 
Under pressure, a broken search means 
more chance of editing wrong worker's salary.

---

## What I Chose NOT to Test

**Performance/Load testing:**
The system's basic features aren't working yet. 
Testing how it performs under 1000 users when 
the save button doesn't even work is pointless. 
Fix the fundamentals first.

**Visual/UI testing:**
Whether charts look correct or colors match 
the design — these don't affect whether a 
worker gets paid correctly. I focused on 
functional correctness over visual polish.

**Email notifications:**
No email feature exists in this codebase. 
Can't test what isn't there.

---

## My Answer to the Senior Dev

I wouldn't argue with him or tell him 
he's wrong. He's been on this codebase 
3 years — he knows it better than I do.

What I'd do instead is show him one real 
example. Not a theory. Not a slide deck. 
Just — "look, this test caught something 
that would have reached production without 
anyone noticing."

If the tests save him even one late-night 
emergency fix, I think he'd be open to it. 
I'm not trying to change how he thinks 
about testing. I just want to show him 
it's useful — once is enough.
---

## The Pattern I'm Testing Against

Every test I wrote protects one pattern:

**Frontend action → Backend request → 
Database change → Correct output for worker**

When any link in that chain breaks silently 
— like a save button that redirects instead 
of saving — a worker gets hurt and nobody 
knows why until month end.

My tests make that chain visible and 
verifiable on every code push.

---

## Tools I Used

- **Playwright** — End to end browser testing
- **Supertest** — API endpoint testing  
- **GitHub Actions** — CI pipeline, 
  runs tests on every push to main
- **MySQL Workbench** — Database verification
- **Browser DevTools** — Network tab to 
  confirm API calls are actually being made

---