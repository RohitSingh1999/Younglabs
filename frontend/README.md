# **Younglabs - Full Stack Developer Task**  

## **Project Overview**  
This is a simple **Full Stack** application that includes:
- A **backend** built with **Node.js & Express** to provide a greeting API.
- A **frontend** built with **React** to interact with the API.

## **Live Demo**  
- 🔗 **Frontend**: [https://younglabs-tawny.vercel.app/](#)  
- 🔗 **Backend**: [https://younglabs-9avu.onrender.com](#)  

---

## **Technologies Used**  
- **Backend**: Node.js, Express  
- **Frontend**: React + Vite, Axios  
- **Deployment**: Vercel (Frontend) & Render (Backend)  

---

## **Installation & Setup**  

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/RohitSingh1999/Younglabs.git
cd Younglabs
```

### 2️⃣ **Backend Setup**
```sh
cd backend
npm install
npm run dev  # Starts the server on port 5000
```
- The API runs on: `http://localhost:5000/api/greet?name=YourName`

### 3️⃣ **Frontend Setup**
```sh
cd frontend
npm install
npm run dev  # Starts frontend on localhost:5173 (if using Vite)
```
- Update the API URL in **App.jsx**:
  ```js
  const API_BASE_URL = "https://younglabs-9avu.onrender.com";
  ```

---

## **API Endpoints**  

### **GET** `/api/greet?name=YourName`  
📌 **Description**: Returns a greeting message.  
📌 **Response** (Success - 200):  
```json
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
```
📌 **Response** (Error - 400):  
```json
{
  "error": "Name is required."
}
```

---

## **Deployment Guide**
### 🚀 **Backend Deployment (Render)**
1. Push the latest backend code to GitHub.  
2. Go to [Render](https://render.com/) and create a **new web service**.  
3. Connect it to your GitHub repo.  
4. Set the **build command**: `npm install`  
5. Set the **start command**: `node server.js`  
6. Once deployed, copy the **Render backend URL** and update it in the frontend.

### 🚀 **Frontend Deployment (Vercel)**
1. Push the latest frontend code to GitHub.  
2. Go to [Vercel](https://vercel.com/) and create a **new project**.  
3. Connect it to your **frontend GitHub repo**.  
4. Deploy and copy the **Vercel frontend URL**.

---

## **Screenshots**  
_Add images of your UI and Postman test results here._

---

## **Author**  
👤 **Rohit Singh**  
📧 Email: [rohitsingh2371999@gmail.com](#)  
🔗 GitHub: [github.com/RohitSingh1999](https://github.com/RohitSingh1999)  

---
