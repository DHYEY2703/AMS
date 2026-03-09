<<<<<<< HEAD
# Student Attendance System

## Description

This project is a Student Attendance System built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows for managing users, classes, marking attendance, and generating attendance reports.

## Features

- User Authentication (Signup, Login)
- User Management (For admin roles)
- Class Management
- Marking Attendance (For Teachers roles)
- Viewing Attendance Reports (For Students roles)
- Dashboard for overview

## Technologies Used

**Frontend:**

*   React
*   Vite (as build tool)
*   Tailwind CSS (for styling)
*   Zustand (potentially for state management)

**Backend:**

*   Node.js
*   Express.js (Web Framework)
*   MongoDB (Database)
*   Mongoose (MongoDB ODM)
*   bcryptjs (for password hashing)
*   jsonwebtoken (for authentication tokens)
*   cors (for handling Cross-Origin Requests)
*   dotenv (for environment variables)
*   helmet (for securing Express apps)

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   Node.js installed (includes npm)
*   MongoDB installed and running

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd student-attendance-system
    ```
2.  Install dependencies for both frontend and backend:
    ```bash
    npm run build
    ```
    This command will install dependencies in both `backend` and `frontend` directories and build the frontend.

3.  Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

## Running the Project

To run the project, execute the start script from the root directory:
=======
# 📊 Attendance Management System

A modern **MERN Stack Attendance Management System** built to simplify the process of managing student attendance, classes, and user authentication.
This project demonstrates full-stack development using **MongoDB, Express.js, React.js, and Node.js** with secure authentication and a responsive dashboard.

---

## 🚀 Features

* 🔐 **JWT Authentication** (Login / Signup)
* 👨‍🎓 **Student & Admin Role Management**
* 🏫 **Class Creation & Management**
* 📊 **Attendance Tracking System**
* 📈 **Dashboard with Attendance Insights**
* 🌐 **RESTful API with Express.js**
* 🗄 **MongoDB Database Integration**
* ⚡ **Modern React Frontend using Vite**
* 📱 **Responsive UI**

---

## 🛠 Tech Stack

### Frontend

* ⚛️ React.js
* ⚡ Vite
* 📡 Axios
* 📊 Chart.js
* 🎨 CSS / Tailwind (depending on project)

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB
* 📦 Mongoose
* 🔑 JSON Web Tokens (JWT)

---

## 📂 Project Structure

```
attendance_management_system
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── index.js
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/attendance_management_system.git
cd attendance_management_system
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside **backend** folder.

Example:

```
PORT=5002
MONGO_URI=mongodb://127.0.0.1:27017/attendance_db
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Start Backend Server
>>>>>>> 67595347dcc8330abcbd460b1b7ddc1b57a25e7c

```bash
npm start
```

<<<<<<< HEAD
This will start the backend server. The frontend will be served separately (usually by navigating to the frontend directory and running `npm run dev` during development, but the `npm start` script in the root only starts the backend based on the `package.json`). For a production build, the frontend build artifacts would typically be served by the backend.

## Project Structure

```
student-attendance-system/
├── backend/             # Express.js backend code
├── frontend/            # React frontend code
├── .gitignore
├── package.json         # Root package.json with scripts
├── package-lock.json
└── README.md            # Project README file
```

## License

This project is licensed under the ISC License.
=======
Backend will run on:

```
http://localhost:5002
```

---

### 5️⃣ Install Frontend Dependencies

Open new terminal:

```bash
cd frontend
npm install
```

---

### 6️⃣ Start Frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### User Routes

```
POST /api/users/signup
POST /api/users/login
GET  /api/users/profile
```

### Class Routes

```
GET    /api/classes
POST   /api/classes
DELETE /api/classes/:id
```

### Attendance Routes

```
POST /api/attendance/mark
GET  /api/attendance
```

---

## 📸 Screenshots

You can add screenshots of the dashboard here.

```
/screenshots/login.png
/screenshots/dashboard.png
/screenshots/attendance.png
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-Stack MERN development
* REST API design
* JWT Authentication
* Database schema design
* Frontend-Backend integration
* Error handling & validation

---

## 👨‍💻 Author

**DJ (Dhyey)**
B.Tech Information Technology Student
Frontend Developer | UI/UX Enthusiast | MERN Stack Learner

---

## ⭐ Support

If you like this project, please **star the repository ⭐** and share it with others!

---
>>>>>>> 67595347dcc8330abcbd460b1b7ddc1b57a25e7c
