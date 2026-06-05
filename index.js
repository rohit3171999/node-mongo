const mongoose = require('mongoose'); // Just to connect to MongoDB

mongoose.connect(
    "mongodb://127.0.0.1:27017/rohitdb"
)
.then(() =>{
    console.log("Mongo Connected");
})
.catch((err) => {
    console.log("err");
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Rohit!');
});

app.listen(3000, () => {
  console.log('Server Running');
});