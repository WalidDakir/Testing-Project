
# Project Name: MERN Project

## Description
A Full-Stack Web Application built using the **MERN** stack: MongoDB, Express.js, React.js, and Node.js. This project is designed to demonstrate CRUD operations, authentication, and state management across the stack.

### Features:
- User Authentication (Sign up, Sign in, Logout)
- RESTful API endpoints
- Role-based access (Admin/User)
- Dynamic content management with MongoDB
- Secure user sessions using JWT tokens and HTTP-only cookies
- Responsive design using TailwindCSS

## Technologies
1. **MongoDB**: NoSQL database for storing user and application data.
2. **Express.js**: Web framework for Node.js, handling API requests and responses.
3. **React.js**: Frontend framework used to build a dynamic and responsive UI.
4. **Node.js**: Backend runtime that handles requests and API integration.

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/WalidDakir/Testing-Project
```

2. Navigate to backend and frontend folders and install the dependencies:
```bash
cd backend
npm install
cd ../frontend
npm install
```

3. Setup environment variables:

     FRONTEND_URL=http://localhost:3000
     ```

4. Run the backend and frontend:
```bash
cd backend
npm run dev
```
For frontend:
```bash
cd frontend
npm start
```

5. Navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **POST** `/api/signup`: Register a new user.
- **POST** `/api/signin`: Log in an existing user.
- **GET** `/api/user-details`: Get the authenticated user's information.
- **GET** `/api/user-logout`: Log out the user.
-------------------------------------------------------------
# 🚀 MERN-Project Test Automation  

## 📌 GitHub Project Selection  
This repository contains **automated test scripts** for the MERN-Project, a web application designed for **user authentication, profile management, and API interactions**.  

### **Why We Chose MERN-Project?**  
✅ It is a **full-stack project**, incorporating both frontend and backend functionalities.  
✅ It includes **authentication, user management, and session handling**, making it ideal for comprehensive testing.  
✅ Well-structured, allowing easy automation with **TypeScript + Selenium WebDriver**.  

---

## 🔹 **How to Set Up & Run Tests**  

### **1️⃣ Prerequisites**  
Before running the tests, ensure the following dependencies are installed:  
- **Node.js** & npm  
- **Chrome WebDriver** (for browser automation)  
- **Selenium WebDriver**  

### **2️⃣ Install Dependencies**  
Navigate to the project root and install the required packages:  
```bash
npm install selenium-webdriver typescript ts-node -D

3️⃣ Run Automated Tests
Execute each test script using ts-node:

npx ts-node tests/register.test.mjs  # User Registration Test
npx ts-node tests/login.test.mjs     # Login Test (Valid & Invalid Cases)
npx ts-node tests/session.test.mjs   # Session Persistence Test

