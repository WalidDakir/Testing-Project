# 📌 Test Plan for MERN-Project  

## 1️⃣ Scope & Objectives  
The purpose of this test plan is to ensure the **functionality, security, and reliability** of the MERN-Project application, focusing on key user interactions. The testing will cover:  

✅ **User Authentication** - Registration, login, and session management  
✅ **User Management** - CRUD operations on user profiles  
✅ **API Testing** - Verifying backend responses and security  
✅ **Frontend Validation** - UI consistency and user experience  
✅ **Security Testing** - Protecting against unauthorized access and vulnerabilities  

---

## 2️⃣ Test Approach  

### 🔹 Manual Testing  
✅ **UI verification** – Ensuring all elements are correctly displayed and functioning  
✅ **API validation** – Testing backend responses using Postman  
✅ **Exploratory testing** – Identifying edge cases and usability issues  
✅ **Functional testing** – Checking user interactions (registration, login, profile updates)  
✅ **Security checks** – Attempting unauthorized access and testing data protection  

---

## 3️⃣ Test Environment Requirements  

### ✅ Hardware  
- Local machine (Windows/Linux/Mac)  
- Internet access for API testing  

### ✅ Software  
- Node.js and MongoDB installed  
- Postman for API validation  
- Any browser for UI testing  

### ✅ Test Data  
- Sample user credentials (valid and invalid)  
- Predefined scenarios for authentication and session testing  

---------------------------------------------------------------

4️⃣ Test Cases for Critical User Flows  
- Authentication Tests 

 ### TC01 - Verify Successful User Registration  
Steps:  
1. Open the registration page.  
2. Enter valid user details (name, email, password).  
3. Click "Sign Up."  
4. Check for success message and login option.  
Expected Result: User is created, and confirmation message is displayed.  

### TC02 - Validate Login with Correct & Incorrect Credentials  
Steps:  
1. Navigate to the login page.  
2. Try logging in with valid credentials.  
3. Log out and attempt login with incorrect credentials.  
Expected Result: Successful login for correct data, error message for incorrect credentials.  

###  TC03 - Test JWT Session Persistence  
Steps: 
1. Login successfully.  
2. Close and reopen the browser.  
3. Check if the user is still logged in.  
Expected Result: User remains logged in unless they manually log out.  

### TC04 - Verify Logout Functionality  
Steps: 
1. Login and access a protected page.  
2. Click the "Logout" button.  
3. Attempt to access the protected page again.  
Expected Result: User is redirected to the login page after logging out.  

## 2️⃣ User Management Tests 

### TC05 - Create New User Profile  
Steps:  
1. Login as an admin.  
2. Navigate to the "Create User" section.  
3. Enter new user details and submit.  
Expected Result: The user is successfully added to the system.  

### TC06 - Update User Information  
Steps:  
1. Select an existing user from the database.  
2. Modify their details (email, password, role).  
3. Submit changes.  
Expected Result: The database updates and reflects the new details.  

### TC07 - Delete a User Profile  
Steps: 
1. Login as admin.  
2. Locate a user profile and click "Delete."  
3. Confirm deletion.  
Expected Result: The user is removed, and the system updates accordingly.  

## 3️⃣ API & Security Tests

### TC08 - Validate API Responses for User Login  
Steps:  
1. Send an API request to the login endpoint using Postman.  
2. Check the response payload (status code, message, JWT token).  
Expected Result: API returns a 200 response and valid JWT token.  

### TC09 - Test Unauthorized Access to Protected Routes  
Steps: 
1. Try accessing a protected API route without authentication.  
2. Observe the API response.  
Expected Result: API denies access with a 401 Unauthorized error.  

### TC10 - Validate Error Handling for Invalid User Data  
Steps: 
1. Enter incorrect data (too short password, invalid email format) during registration.  
2. Submit the form and check system response.  
Expected Result: The system displays appropriate error messages.  

---

## 📌 Conclusion  
These **10 manual test cases** cover **authentication, user management, API validation, and security**, ensuring robust manual testing before automation. 🚀  

### **Next Steps:**  
✅ Save this as **TEST_CASES.md** in your repository.  
✅ Start executing manual test cases using Postman and browser-based testing.  
✅ Let me know if you need help writing defect reports or automating tests! 😊  


---

## 5️⃣ Risk Assessment & Prioritization  

### 🔺 High-Risk Areas  
- Authentication Security - Critical for protecting user data  
- Backend API Reliability - Ensures stable application behavior  

### 🔸 Medium-Risk Areas  
- UI Responsiveness - Important for user experience  
- Session Handling - Prevent security leaks  

### 🔹 Low-Risk Areas  
- Performance Testing - Secondary priority, but beneficial for optimization  

---

## 6️⃣ Defect Reporting Procedure  

### 🔹 Bug Tracking Tools  
✅ **Jira** or **Excel** for structured bug reporting  
✅ Each defect will be logged with **screenshots & replication steps**  

### 🔹 Bug Report Format  
- **Title:** (e.g., "Login fails with valid credentials")  
- **Description:** (Explain the issue)  
- **Steps to Reproduce:** Clear steps to replicate  
- **Expected vs Actual Behavior:** What should happen vs what happens  
- **Severity & Priority:** Define the impact of the bug  
- **Suggested Fix:** Recommendations for resolving    

---


