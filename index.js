const mongoose = require('mongoose'); // Just to connect to MongoDB
const express = require('express');
const Product = require("./models/Product");

mongoose.connect(
    "mongodb://127.0.0.1:27017/rohitdb"
)
    .then(() => {
        console.log("Mongo Connected");
    })
    .catch((err) => {
        console.log("err");
    });



const app = express();

app.get('/add-product', async (req, res) => {
    await Product.create({
        name: "Laptop",
        price: 1200000,
        category: "Electronicas"
    });
    res.send('Product Added!!');
});

app.get("/products", async (req, res) =>{
    const products = await Product.find();
    res.json(products);
})

app.listen(3000, () => {
    console.log('Server Running');
});