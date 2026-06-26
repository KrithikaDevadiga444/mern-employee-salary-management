# Playwright Test Report

## Project

HRMS - Employee Salary Management

**Tester:** Krithika Devadiga

**Date:** June 26, 2026

---

## Test Summary

I wrote and ran 6 Playwright tests for the main user flows in the application.

* **Total Tests:** 6
* **Passed:** 4
* **Failed:** 2

The two failed tests were expected because they exposed real bugs that I found during testing.

---

## Passing Tests

* Admin dashboard opens after login.
* Employee list page loads successfully.
* Payslip page opens correctly.
* Salary report page loads successfully.

These tests show that the basic pages are accessible and working as expected.

---

## Failed Tests

### BUG-01 – Login accepts any credentials

**What I expected**

The application should reject an invalid username or password.

**What actually happened**

No matter what username or password I entered, I was taken to the admin dashboard.

**Why this test failed**

The failure confirms the authentication bug that I reported.

---

### BUG-04 – Employee login page is not linked

**What I expected**

An employee should be able to reach the employee login page from the main page.

**What actually happened**

There is no link to the employee login page, so a user wouldn't know it exists.

**Why this test failed**

The failure confirms that the employee login page is missing from the application's navigation.

---

## CI Execution Note

The Playwright test suite was executed successfully on the local development environment.

A GitHub Actions workflow was also configured to automate execution. While the workflow completed the setup process (dependency installation, database import, backend startup, and frontend startup), the application did not fully render in the GitHub-hosted environment, causing Playwright timeout failures.

This appears to be an environment-specific issue rather than a defect in the Playwright test scripts themselves.

## Final Note

I expected two tests to fail because they were written to verify the bugs I discovered during exploratory testing. Seeing these failures gives confidence that the bugs are real, reproducible, and can be verified again after they are fixed.