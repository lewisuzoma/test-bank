# OnlineBankingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

# Section A: General Knowledge
## 1. What are the key security considerations when developing financial applications?
When developing a financial application, managing and securing information is critical, this information includes personal information, financial transactions, account information, and debit and credit card information.
•	Set firewalls to secure your network, and SQL Database firewall rules.
•	Implement Monitoring and Logging.
•	Encryption of Data in Transit and at Rest: Ensure sensitive data is encrypted using strong encryption algorithms, both during transmission and while stored.
•	Role-based Access Control (RBAC): Restrict access to confidential data based on the user’s role and responsibilities.
•	Cross-border Data Transfers: Ensure compliance with international data transfer regulations (e.g., GDPR) when transferring data across jurisdictions.
•	Incident Response Plan: Prepare and regularly test an incident response plan to handle security incidents, breaches, and non-compliance with PCI DSS or ISO27001.
•	Firewalls and Network Security: Configure firewalls to protect internal networks and segment sensitive areas such as databases with cardholder data (for PCI DSS).

## 2. Describe the importance of compliance standards such as PCI-DSS and GDPR in financial applications.
PCI DSS Controls (Payment Card Industry Data Security Standard)
PCI DSS is a security standard for organizations that handle cardholder data (CHD). It establishes requirements to protect credit and debit card information and prevent fraud. It is essential for any software application that processes, stores, or transmits cardholder data.
PCI DSS essentials: 
•	It provides structural approach to ensure that credit card data are securely handled.
•	Enforces encryption, tokenization, and secure payment processing methods to reduce fraud risk.
•	Helps to reduce chances of data breaching by enforcing strong security controls.


GDPR (General Data Protection Regulation)
GDPR is a set of rules on how personal data of individuals are collected, processed, and stored within the EU.
GDPR essentials:
1.	Lawfulness, fairness and transparency — Processing must be lawful, fair, and transparent to the data subject.
2.	Purpose limitation — You must process data for the legitimate purposes specified explicitly to the data subject when you collected it.
3.	Data minimization — You should collect and process only as much data as absolutely necessary for the purposes specified.
4.	Accuracy — You must keep personal data accurate and up to date.
5.	Storage limitation — You may only store personally identifying data for as long as necessary for the specified purpose.
6.	Integrity and confidentiality — Processing must be done in such a way as to ensure appropriate security, integrity, and confidentiality (e.g. by using encryption).
7.	Accountability — The data controller is responsible for being able to demonstrate GDPR compliance with all of these principles.

## 3. Explain the concept of "idempotency" in financial transactions and why it's crucial.
Idempotency ensures that if request is accidently sent twice payment will only be processed once. This is useful when requests can be retried due to network failures or timeouts. A unique identifier is sent with each request that ensures the request is processed only once, even if it is retried multiple times. For example if 10 naira transaction is initiated and the system experiences a network issue and the request is retried, an idempotent system will ensure that the same 10 naira isn’t transferred multiple times.

## 4. What are the potential risks of handling sensitive customer data, and how can they be mitigated?
Sensitive customer data must be carefully protected to ensure compliance with privacy regulations and to maintain trust. Below are some strategies to mitigate risk from malicious actors:
•	Encryption of Data in Transit and at Rest: Ensure sensitive data is encrypted using strong encryption algorithms, both during transmission and while stored.
•	Role-based Access Control (RBAC): Restrict access to confidential data based on the user’s role and responsibilities.
•	Data Integrity Monitoring: Implement tools to monitor and detect any unauthorized changes to sensitive data.
•	Backups for Data Integrity: Regularly back up critical data and verify backups to ensure their integrity.
•	Password Management: Enforce strong password policies and secure password storage mechanisms (e.g., hashed passwords with salt).

# Section B: Frontend Development
## 1.	How would you ensure the UI/UX of a banking web application is both user-friendly and secure?
Is to ensure the application is both user-friendly and secured, as well providing intuitive and seamless experience for users. The application should be easy to navigate and quick to understand. Integrating security features like strong authentication, end-to-end encryption, and real-time alerts is essential. Making sure security measures are implemented seamlessly into the design.

## 2.	Explain the role of form validation and data masking in financial applications.
Data masking techniques is use to hide sensitive portions of data (e.g., credit card) from unauthorized users or systems.

## 3.	Discuss strategies for handling real-time data updates (e.g., account balance changes) in a React application.
Real-time data updates are crucial for delivering a responsive, user-friendly experience, especially in banking application where frequent data update is required. Some strategies for handling real-time data updates involves: WebSocket and SSE (Server-Side Events).

## 4.	What are Progressive Web Apps (PWAs), and how can they benefit a financial institution?
Progressive Web Apps (PWAs) offer numerous benefits to financial institutions by providing cross-platform compatibility, improved performance, real-time updates, and offline capabilities. They enable banks and other financial organizations to deliver a seamless, cost-effective, and engaging user experience while maintaining strong security and compliance standards. By adopting PWAs, financial institutions can enhance customer engagement, streamline operations, and reach a broader audience with minimal overhead.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.