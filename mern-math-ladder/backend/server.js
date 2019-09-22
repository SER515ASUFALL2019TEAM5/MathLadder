// const express = require('express');
// const cors = require('cors');

// require('dotenv').config();   // we will have our enviourment variable in .env file.

// const app = express();
// const port = process.env.PORT || 5000;    //this how we have created our express server

// //this are our middle layer
// app.use(cors());
// app.use(express.json());  //this is used to parse json

// //this will start our server
// app.listen(port, () => {
//     console.log('Server is running on port: ${port}');
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  //helps to connect to mongo db database.
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{console.log("Mongo db connection established successfully")})
app.listen(port,()=>{
   console.log('server is running on : ${port}');
});