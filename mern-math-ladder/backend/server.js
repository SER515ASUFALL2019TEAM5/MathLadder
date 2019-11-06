/*
* @author Sakshi Jain
* refernces used : https://www.youtube.com/watch?v=S9maJY5JcZc
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
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

const rolesRouter = require('./routes/roles');
const usersRouter = require('./routes/users');

app.use(bodyParser.json())
app.use(cors())
app.use(
   bodyParser.urlencoded({
      extended: false
   })
)
app.use('/roles', rolesRouter);
app.use('/users', usersRouter);

app.listen(port,()=>{
   console.log('server is running on : ' + port);
});