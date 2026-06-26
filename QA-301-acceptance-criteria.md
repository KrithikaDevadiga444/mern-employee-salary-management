# QA-301: Acceptance Criteria
## Feature: Admin Edit Employee Salary Details
**Written by:** Krithika Devadiga  
**Date:** June 25, 2026

---

## Background
While testing this HRMS, I realized salary editing is one of the most sensitive features. If the wrong employee's salary is updated or the wrong amount is entered, the worker may receive the wrong pay. Since this system is used for employee payroll, I think the edit process should have enough checks to prevent simple mistakes.

---

## Acceptance Criteria

### AC-01: Identity Verification Before Edit
**Given** admin clicks "Edit Salary" for an employee  
**When** the edit form opens  
**Then** the system must display:
- Employee full name
- Employee ID (NIK)
- Employee photo
- Job position
- Join date

So admin can confirm they are editing the RIGHT person
before changing any value.

**Why this matters:** I noticed the app currently shows 
the same employee data to every user who logs in. 
If admin can't verify identity before editing, 
they will edit the wrong worker's salary without knowing.

---

### AC-02: Allowed Fields to Edit
**Given** admin has verified the correct employee  
**When** they edit salary details  
**Then** they should be able to modify:
- Basic salary (Gaji Pokok)
- Transport allowance (Tunjangan Transportasi)
- Meal allowance (Uang Makan)
- Overtime hours and rate
- Deductions (Potongan)
- Attendance days (Hadir, Sakit, Alpha)

**Note:** Overtime field is currently missing from the 
system entirely — this is a gap for construction workers 
who work heavy overtime shifts.

---

### AC-03: Salary Cannot Be Zero or Negative
**Given** admin is editing salary fields  
**When** they enter any value  
**Then** the system must reject:
- Zero salary (Rp. 0)
- Negative salary (e.g. Rp. -5000)
- Total salary less than minimum wage

**Error message must say:** 
"Salary cannot be zero or negative. 
Please enter a valid amount."

**Why this matters:** A construction worker earning 
Rp. 0 this month means their family has no income. 
The system should make this impossible, not just unlikely.

---

### AC-04: Deductions Must Be Justified
**Given** admin adds a deduction  
**When** they enter the deduction amount  
**Then** the system must:
- Require a reason for every deduction
- Not allow deduction greater than total salary
- Show deduction history so worker can verify

**Why this matters:** Workers should not have salary 
silently deducted. Every deduction needs a reason.

---

### AC-05: Employee Can See Updated Payslip After Save
**Given** admin saves updated salary details  
**When** the employee logs into their account  
**Then** the employee must be able to:
- See updated salary breakdown
- Download their payslip as PDF
- See all deductions with reasons

**Currently broken:** Payslip download button does 
nothing in the current system.

---

### AC-06: Wrong Employee Protection
**Given** admin is about to save salary changes  
**When** they click Save  
**Then** system should show a confirmation popup:
"You are editing salary for [Employee Name] [NIK]. 
Are you sure?"

**Admin must click Confirm to proceed.**

**My suggestion:** Each employee should have a 
unique PIN that admin enters before editing their 
salary — like a second verification step. 
This prevents accidental edits to wrong worker's data.
Fingerprint would be ideal for construction sites 
but wastes worker time — PIN is faster and safer.

---

### AC-07: Audit Trail
**Given** any salary edit is saved  
**When** changes are made  
**Then** system must log:
- Who made the change (admin username)
- What was changed (old value → new value)
- When it was changed (timestamp)

So if a worker complains about wrong salary, 
admin can trace exactly what happened and when.

---

## What I Would Test First
If I had to pick ONE acceptance criteria to test first, 
it would be AC-03 — zero/negative salary check.

Because in a construction company, a payroll operator 
working under pressure at month end could accidentally 
enter wrong values. The system should catch that 
before it reaches the worker.

A wrong payslip isn't a UI bug — it's a missed meal.