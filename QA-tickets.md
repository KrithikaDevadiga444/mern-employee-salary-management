# QA Bug Report
**Tester:** Krithika Devadiga  
**Date:** June 25, 2026  
**Repo:** github.com/KrithikaDevadiga444/mern-employee-salary-management  
**App:** HRMS - Employee Salary Management System

---

## QA-302-BUG-01
**Title:** Any username and password logs you in — 
no authentication at all

**Severity:** CRITICAL  
**Page:** Admin Login and Employee Login

**How I found it:**
I tried logging in with a completely random username 
"xyz123" and password "wrongpassword" — just to see 
what would happen. It logged me straight into the 
admin dashboard. I was shocked. I tried 3-4 more 
random combinations. Every single one worked.

**Steps to Reproduce:**
1. Go to `http://localhost:5173`
2. Type any random username — I used `xyz123`
3. Type any random password — I used `wrongpassword`
4. Click Login

**Expected Result:**
"Invalid username or password" error message

**Actual Result:**
Full access to admin dashboard — employee list, 
salary data, attendance records, everything

**Root Cause I Found in Code:**
I opened the login component file and found this:

```jsx
<Link to='/admin/dashboard'>
    <input type='submit' value='Login' />
</Link>
```

The login button is literally just a navigation link. 
No API call. No password check. Nothing. 
The developer built the UI but never connected 
it to backend authentication.

**My Reaction:**
This is the most critical bug I found. Authentication 
is the main door of any system. If anyone can walk 
through that door — a rival contractor, a disgruntled 
worker, anyone — they can see every worker's salary, 
edit it, or worse. Someone could increase their own 
salary or reduce someone else's. What if the employee 
wrote the salary more or what if someone wrote the 
salary less — the company would lose money and workers 
would lose trust. Even personal details would be 
shared to any random person.

**Impact:**
200+ construction workers' salary data, attendance 
records, and personal details are exposed to literally 
anyone who opens the URL. This isn't a minor bug — 
this is the system having no lock on the front door.

---

## QA-302-BUG-02
**Title:** Add Employee form sends you back to login 
— data never saves

**Severity:** CRITICAL  
**Page:** Data Pegawai → Add Employee Form

**How I found it:**
I tried adding a new employee. Filled every field 
carefully — name, ID, gender, position, photo, 
everything. Clicked Save. It sent me straight back 
to the login page. I thought maybe I accidentally 
pressed back. So I tried again. And again. Third time 
same thing. That's when I realized — this is the 
system's mistake, not mine.

**Steps to Reproduce:**
1. Login as admin
2. Go to Master Data → Data Pegawai
3. Click Tambah Pegawai (Add Employee)
4. Fill ALL fields including uploading a photo
5. Click Simpan (Save)

**Expected Result:**
Employee saved, success message shown, 
redirect to employee list

**Actual Result:**
Redirected to login page. Nothing saved. 
I checked the backend terminal — not a single 
request came through. The form isn't even 
talking to the backend.

**My Reaction:**
What happens to a new construction worker 
if HR can't add them to the system? 
No record = no attendance tracking = 
no salary calculation = worker doesn't get 
paid for days they actually worked. 
All their hard work, gone. Not because 
they did anything wrong — because the 
save button doesn't work.

**Additional finding:**
The employee login page (`/pegawai/login`) is also 
not linked from anywhere on the main page. 
A real construction worker would never know 
this page exists unless they manually type 
the URL. There is no button, no link, nothing 
pointing workers to their own login page.

**Impact:**
HR cannot onboard any new worker. And even 
existing workers have no way to access 
their own salary information.

---

## QA-302-BUG-03
**Title:** Payslip generate button does absolutely nothing

**Severity:** CRITICAL  
**Page:** Laporan → Slip Gaji

**How I found it:**
I clicked the button a few times because I thought 
maybe the page was loading in the background. 
Nothing happened. I even checked the browser's 
Network tab and there wasn't a single request 
being sent. Since generating a payslip is the 
final step of the payroll process, seeing the 
button do absolutely nothing makes this a 
serious issue. A worker expecting their payslip 
would simply have no way to get it.

**Steps to Reproduce:**
1. Go to Laporan → Slip Gaji
2. Select Bulan: Mei, Tahun: 2024
3. Select any employee name
4. Click "Cetak Slip Gaji"

**Expected Result:**
PDF payslip downloaded or shown on screen

**Actual Result:**
Nothing happens. Network tab confirmed 
not a single request was made.

**My Reaction:**
A worker needs their payslip to prove income — 
for bank loans, for renting a house, for 
disputing a salary error. If this button does 
nothing, they have no proof of what they earned. 
That's not a UI bug — that's taking away 
someone's financial evidence.

**Impact:**
Workers cannot get payslips. The most critical 
output of the entire system doesn't work.

---

## QA-302-BUG-04
**Title:** Every login shows the same worker's 
private data — Gilbert Hutapea

**Severity:** CRITICAL  
**Page:** Employee Dashboard (`/pegawai/dashboard`)

**How I found it:**
I discovered there's a separate employee login 
page at `/pegawai/login` — it's not linked 
anywhere from the main page, so a real worker 
would never find it. When I logged in with 
random credentials, I saw Gilbert Hutapea's 
complete profile — his photo, his job details, 
his salary history. I logged out, used different 
random credentials. Same thing — Gilbert 
Hutapea's data again. Every single login 
shows the same person's information.

**Steps to Reproduce:**
1. Go to `http://localhost:5173/pegawai/login`
2. Type any random username and password
3. Click Login
4. See Gilbert Hutapea's personal data and salary

**Expected Result:**
Each employee sees only their own data

**Actual Result:**
Everyone sees Gilbert Hutapea's data — 
his photo, salary history, job position, 
personal details

**My Reaction:**
This is a complete privacy violation. 
His photo is visible to anyone. His salary 
is visible to anyone. His personal details — 
all of it exposed. In a real construction site, 
salary comparisons between workers cause 
serious conflict. Worker A seeing Worker B's 
salary is not just a privacy bug — it's a 
workplace problem waiting to happen.

**Impact:**
Complete privacy breach. Every worker's 
financial information exposed to everyone.

---

## QA-302-BUG-05
**Title:** Search box does not filter employee records

**Severity:** HIGH  
**Page:** Data Pegawai (Employee List)

**How I found it:**
While exploring the Employee List page, I wanted 
to quickly find a specific employee instead of 
checking each page manually. I typed employee 
names like "Gilbert" and "Nana" in the search 
box, but nothing changed. I also tried searching 
using the employee ID (NIK), but the results 
stayed exactly the same. The search box looks 
functional but does nothing.

**Steps to Reproduce:**
1. Go to Master Data → Data Pegawai
2. Type "Gilbert" in the search box
3. Observe — list doesn't change
4. Try typing a NIK number — still no change

**Expected Result:**
Employee list filters to show only 
matching results

**Actual Result:**
Search box accepts text but list 
never changes — no filtering happens

**My Reaction:**
I wasn't expecting this. The search box 
looks completely normal — it even has a 
placeholder text. But it does nothing. 
In a company with 200+ construction workers, 
a payroll operator needs to find specific 
workers quickly at month end. Without search, 
they have to click through every page manually. 
Under month-end pressure, this wastes time 
and increases chances of picking wrong worker.

**Impact:**
Payroll operators cannot quickly find 
specific workers. Increases risk of editing 
wrong employee's salary under time pressure.

---