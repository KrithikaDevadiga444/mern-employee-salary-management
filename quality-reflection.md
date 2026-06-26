# Quality Reflection

## Project: HRMS - Employee Salary Management

**Written by:** Krithika Devadiga
**Date:** June 26, 2026
**Repo:** github.com/KrithikaDevadiga444/mern-employee-salary-management

---

## 1. Do you usually write tests in your own projects?

Yes, but not for every project I've built.

In my earlier college projects, I mostly focused on getting the features working. If the application worked on my laptop, I usually moved on to the next task without writing proper tests.

The project where I spent the most time on testing was **PayFlowX – Fintech Payment Gateway Simulation System**. Since it handled payment flows and APIs, I wanted to make sure different scenarios worked correctly. I used Postman while developing the APIs and later wrote 15 automated pytest test cases to verify important payment flows and API responses.

Working on this HRMS assignment made me realize that testing shouldn't be something I do only at the end. It should be part of the development process from the beginning.

---

## 2. Describe a time you shipped something that wasn't fully tested.

During one of my personal projects, I focused mainly on completing the features before my deadline. After finishing, I noticed a few issues that I hadn't tested properly because I assumed everything would work together.

Nothing major broke, but it made me realize that assumptions can easily hide bugs.

While working on this HRMS project, I experienced the same lesson from the opposite side. The application looked complete, but once I started testing properly, I found that some important features weren't connected to the backend at all. That reminded me that a feature isn't really finished until it has been tested properly.

---

## 3. If this team has no QA process, what is the ONE thing you would introduce first?

The first thing I would introduce is automated tests for the most important business flows.

I wouldn't try to test everything immediately. I'd start with login, employee management, payroll, and payslip generation because those are the features that directly affect employees.

Once those tests are running automatically, the team can make changes with more confidence because they'll know quickly if something important has broken.

---

## 4. How would you get the senior developer to care about testing?

I wouldn't try to convince him with a presentation or argue that he's wrong.

Instead, I'd show him one real example where an automated test caught a bug before it reached production. If that test saves him from fixing even one production issue later, I think that's a much stronger argument than anything I could say.

I think people trust something more when they see it solving a real problem.

---

## 5. Tell us about a personal system or habit that taught you something about quality.

While working on my projects, I have a habit of keeping a small notebook beside me. Whenever I find a bug or something that confuses me, I write it down instead of thinking I'll remember it later.

I've realized that after a few hours, I usually forget the small details. Writing things down helps me keep track of what I changed, what worked, and what still needs to be fixed.

That habit taught me that a good system doesn't have to be complicated. It just has to be simple enough that you'll actually keep using it. I think quality processes in a team should be the same. If they're easy to follow, people are much more likely to use them consistently.
