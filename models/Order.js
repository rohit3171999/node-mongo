const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    city: String,
    amount: Number,
    product: String
});

module.exports = mongoose.model(
    "Order", orderSchema
);