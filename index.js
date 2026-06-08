const mongoose = require('mongoose'); // Just to connect to MongoDB
const express = require('express');
const Product = require("./models/Product");
const Order = require("./models/Order");

mongoose.connect(
    "mongodb://host.docker.internal:27017/rohitdb"
)
    .then(() => {
        console.log("Mongo Connected");
    })
    .catch((err) => {
        console.log(err);
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

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.get("/update/product", async (req, res) =>{
    await Product.updateOne(
        {name: "Laptop"},
        {$set: {price: 20}}
    );
        res.send("Product Updated!!");
})

app.get("/delete/product", async (req, res) =>{
    await Product.deleteOne({name: "Shampoo-xyz"});
    res.send("Product Deleted!!");
});

app.get("/sales-by-city", async (req, res)=>{
    const result = await Order.aggregate([
        // {
        //     $group: {
        //         _id: "$city",
        //         totalSales: {$sum: "$amount"}
        //     }
        // }
        // {
        //     $sort: {
        //         totalSales: -1
        //     }
        // }
        // {
        //     $match: {
        //         city: "Delhi"
        //     }
        // }
        {
            $count: "totalOrders"
        }
    ]);
    res.json(result);
});
app.get("/add-orders", async (req, res) => {

    await Order.create([
        {
            city: "Delhi",
            amount: 1000,
            product: "Shampoo"
        },
        {
            city: "Delhi",
            amount: 2000,
            product: "Face Wash"
        },
        {
            city: "Mumbai",
            amount: 500,
            product: "Hair Oil"
        },
        {
            city: "Mumbai",
            amount: 700,
            product: "Shampoo"
        }
    ]);

    res.send("Orders Added");

});

app.listen(3000, () => {
    console.log('Server Running');
});