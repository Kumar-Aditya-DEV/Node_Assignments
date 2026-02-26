const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());



let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];



app.get("/products", function(req, res) {
  res.send(products);
});



app.get("/products/:id", function(req, res) {

  let id = parseInt(req.params.id);

  let product = products.find(function(p) {
    return p.id === id;
  });

  if(product){
    res.send(product);
  } else {
    res.send("Product not found");
  }

});




app.get("/products/category/:categoryName", function(req, res) {

  let category = req.params.categoryName;

  let result = products.filter(function(p) {
    return p.category.toLowerCase() === category.toLowerCase();
  });

  res.send(result);

});




app.post("/products", function(req, res) {

  let newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.send(newProduct);

});




app.put("/products/:id", function(req, res) {

  let id = parseInt(req.params.id);

  let product = products.find(function(p){
    return p.id === id;
  });

  if(product){
    product.name = req.body.name;
    product.category = req.body.category;
    product.price = req.body.price;
    product.stock = req.body.stock;
    product.rating = req.body.rating;

    res.send(product);
  }
  else{
    res.send("Product not found");
  }

});




app.put("/products/:id/stock", function(req, res) {

  let id = parseInt(req.params.id);

  let product = products.find(function(p){
    return p.id === id;
  });

  if(product){
    product.stock = req.body.stock;
    res.send(product);
  }
  else{
    res.send("Product not found");
  }

});



app.put("/products/:id/price", function(req, res) {

  let id = parseInt(req.params.id);

  let product = products.find(function(p){
    return p.id === id;
  });

  if(product){
    product.price = req.body.price;
    res.send(product);
  }
  else{
    res.send("Product not found");
  }

});



app.listen(5000, function(){
  console.log("Server started on port 5000");
});