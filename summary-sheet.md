# Summary Sheet
**Name:** Krithika Devadiga
**Date:** June 26, 2026
**Repo:** github.com/KrithikaDevadiga444/
mern-employee-salary-management

---

**1. What does this HRMS exist to deliver, 
and to whom?**

This HRMS exists to deliver an accurate payslip 
to construction workers, who depend on it because 
their salary is how they support their families. 
If they don't get paid correctly or on 
time, they may struggle to buy food, pay rent, or 
cover their children's school fees. That's why 
even a small payroll mistake can have a big impact 
on their lives.

---

**2. What is the single most dangerous bug 
pattern you found across your testing?**

The most dangerous pattern I found was that the 
frontend was built completely disconnected from 
the backend. The login button is literally just 
a navigation link in the code with no API call, no 
password check. The save form sends no request 
to the backend. The payslip button does nothing. 
I only discovered this by actually opening the 
source code. From the outside, everything looks 
functional. That's what makes it dangerous — 
the system looks like it works until someone 
actually tests it.

---

**3. Which test in your suite are you most 
proud of, and why? What specific production 
failure would it prevent? Who would it protect?**

The login test is the one I'm most proud of 
because it immediately exposed that any username 
and password could access the system. This would 
prevent unauthorized people from viewing employee 
salaries and personal information, protecting 
both the company and its workers.

---

**4. What did you choose NOT to automate, 
and why was that the right call?**

I chose not to automate visual checks like 
whether the dashboard layout, charts, or 
notifications looked correct. Those are easier 
to verify manually, while I wanted to spend 
my time automating the business-critical flows 
such as login, employee management, and payroll.

---

**5. What's one thing in your submission 
that you're not fully confident about, 
and why did you include it anyway?**

I wasn't fully confident about some acceptance 
criteria because a few features were incomplete 
in the project, so I had to make reasonable 
assumptions based on how an HRMS should work. 
I still included them because they were based on how I think an HRMS should work instead of leaving those sections empty.

---

**6. What changed between your first approach 
and your final submission?**

My first approach was to find a "perfect" English 
repo and I wasted almost two hours switching 
between repositories. Then I realized the 
Indonesian HRMS I already had running was 
actually better and it had real bugs I could 
investigate with actual evidence. That shift 
was important: a real QA engineer doesn't need 
a perfect system. They need to find what's 
broken in the one they have.

---

**7. What do you not know about quality 
engineering or construction payroll that 
you would need to learn?**

Three things I'd need to learn:

First — how payroll actually works under Indian labour law. PF, ESI, overtime rules under the Factories Act. I don't know these well enough to write proper edge case tests for them.

Second — how to write automated tests for apps 
with broken or missing authentication flows, 
which made testing this system genuinely difficult.

Third — how to get a senior developer who thinks 
QA is overhead to actually trust and use the 
tests I write. I can build the tests. 
I don't yet know how to get them adopted.

---

**8. If you had one more day, what would 
you test that you didn't get to?**

If I had one more day, I would test the salary 
calculation formula itself. I saw numbers on 
screen — basic salary + transport allowance + 
meal allowance - deductions = total salary. 
I never verified if that math is actually correct. 
The employee dashboard showed:
Rp. 4,000,000 + Rp. 600,000 + Rp. 400,000 
- Rp. 100,000 = Rp. 5,900,000

I didn't check if that's right. A silent 
calculation error would affect every worker 
every month and nobody would catch it until 
someone's pay doesn't add up.

---