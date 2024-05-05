const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8070;

//Setting up rounting
app.use('/user',require("./routes/User.js"));


//Setting up database
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Mongo DB connected successfully");
}
)
.catch(()=>{
    console.log("Mongo DB connection failed");
}
)

//Setting up server
app.listen(port,()=>{
    console.log("Server listing on port 8070")
})

module.exports = app; 