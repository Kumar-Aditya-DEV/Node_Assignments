## postman link
https://documenter.getpostman.com/view/50839415/2sBXcEmgfC  


## Deployed Link
https://node-assignments-1-04j5.onrender.com




# E-Commerce Product API (In-Memory)

## Objective
This project is a REST API built using Express.js that manages product data for an e-commerce platform using an in-memory JSON array.

---

## Tech Stack
- Node.js
- Express.js
- CORS

---

## Installation & Run Locally

1. Clone the repository

git clone <your-repo-link>

2. Install dependencies

npm install

3. Run server

node index.js

Server will start on:
http://localhost:5000

---

## Product Structure

{
  id: Number,
  name: String,
  category: String,
  price: Number,
  stock: Number,
  rating: Number
}

---

## API Routes

### GET Routes

GET /products  
→ Get all products

GET /products/:id  
→ Get product by ID

GET /products/category/:categoryName  
→ Get products by category

---

### POST Route

POST /products  
→ Add new product

Sample Body:
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}

---

### PUT Routes

PUT /products/:id  
→ Replace entire product

PUT /products/:id/stock  
→ Update stock only

Body:
{
  "stock": 60
}

PUT /products/:id/price  
→ Update price only

Body:
{
  "price": 1299
}

---

## Status Codes Used
- 200 → Success
- 201 → Created
- 404 → Not Found

---