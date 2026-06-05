const mongoose = require('mongoose'); // Just to connect to MongoDB
const express = require('express');
const Product = reqire("./models/Product");

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
        name: "Shampoo",
        price: 120000,
        category: "Hair Care"
    });
    res.send('Product Added!!');
});

app.listen(3000, () => {
    console.log('Server Running');
});