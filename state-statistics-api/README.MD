## 📮 Postman Documentation
https://documenter.getpostman.com/view/50839415/2sBXcHheFy

## 🌐 Deployment Link
https://node-assignments-3-yut0.onrender.com


# 📊 State Statistics Management API

This project is a REST API built using Express.js to manage statistical data of Indian states using an in-memory JSON array.

---

## 🚀 Setup Instructions

### 1. Clone the Repository
git clone <your-github-repo-link>

### 2. Navigate to Folder
cd state-statistics-api

### 3. Install Dependencies
npm install

### 4. Run Server
node server.js

Server will run on:
http://localhost:3000

---

## 📦 Tech Used
- Node.js
- Express.js
- CORS

---

## 📌 API Routes

### ✅ GET Routes

| Method | Route | Description |
|--------|-------|-------------|
GET | /states | Get all states |
GET | /states/:id | Get state by ID |
GET | /states/highest-gdp | Get state with highest GDP |

---

### ✅ POST Route

| Method | Route | Description |
|--------|-------|-------------|
POST | /states | Add new state |

---

### ✅ PUT Routes

| Method | Route | Description |
|--------|-------|-------------|
PUT | /states/:id | Replace entire state |
PUT | /states/:id/budget | Update budget |
PUT | /states/:id/population | Update population |

---

### ✅ PATCH Routes

| Method | Route | Description |
|--------|-------|-------------|
PATCH | /states/:id/literacy | Update literacy rate |
PATCH | /states/:id/gdp | Update GDP |
PATCH | /states/:id | Partial update |

---

### ✅ DELETE Routes

| Method | Route | Description |
|--------|-------|-------------|
DELETE | /states/:id | Delete by ID |
DELETE | /states/name/:stateName | Delete by name |
DELETE | /states/low-literacy/:percentage | Delete low literacy states |

---

