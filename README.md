# expenses

# Architecture and Structure
src/
├─ app/
│  ├─ features/
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  │  └─ login/
│  │  │  │     ├─ login.component.ts
│  │  │  │     ├─ login.component.html
│  │  │  │     └─ login.component.css
│  │  ├─ dashboard/
│  │  │  ├─ components/
│  │  │  │  ├─ index/
│  │  │  │  │  ├─ index.component.ts
│  │  │  │  │  ├─ index.component.html
│  │  │  │  │  └─ index.component.css
│  │  │  │  └─ recent-expenses/
│  │  │  │     ├─ recent-expenses.component.ts
│  │  │  │     ├─ recent-expenses.component.html
│  │  │  │     └─ recent-expenses.component.css
│  │  │  ├─ models/
│  │  │  │  └─ recent-expense.model.ts
│  │  │  ├─ services/
│  │  │  │  └─ expenses.service.ts
│  │  │  └─ index.ts
│  │  ├─ expense/
│  │  │  ├─ components/
│  │  │  │  └─ add-expense/
│  │  │  │     ├─ add-expense.component.ts
│  │  │  │     ├─ add-expense.component.html
│  │  │  │     └─ add-expense.component.css
│  │  │  ├─ models/
│  │  │  │  └─ expense.model.ts
│  │  │  ├─ services/
│  │  │  │  ├─ currency.service.ts
│  ├─ app.routes.ts
│  └─ app.config.ts
├─ assets/
│  └─ i18n/
│     ├─ en.json
│     └─ ar.json
├─ public/
│  ├─ manifest.webmanifest
│  └─ icons/ (PWA)

# API Integration
for currancy converter >> https://open.er-api.com/v6/latest/USD
for login >> https://690d1d17a6d92d83e850851e.mockapi.io/api/v1/users check if user founded or not 
user>> Arlie.Abernathy@yahoo.com
password >> password 1

# screenshots


<img width="1440" height="718" alt="Screenshot 2025-11-07 at 10 22 50 PM" src="https://github.com/user-attachments/assets/c1baccc4-9ffe-43f5-a99e-b241c74cf72d" />
<img width="1440" height="718" alt="Screenshot 2025-11-07 at 10 22 42 PM" src="https://github.com/user-attachments/assets/0a308c0c-11c0-4c25-a4c9-13814a1acab5" />
<img width="1440" height="718" alt="Screenshot 2025-11-07 at 10 22 30 PM" src="https://github.com/user-attachments/assets/9e473fe1-af30-434e-a266-a47ace22a981" />



# H o w t o run the project
npm i >> to install packages 

ng serve >> open application 

ng build --configuration production
npx http-server ./dist/expense-tracker-lite/browser -p 8080

to run service worker offline (cashe data) 

# Known Bugs / Unimplemented Features
pagination , filter >> just ui 
unit test >> but i have good background about e2e test (playwright)
