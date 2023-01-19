const express = require('express');
const app = express()
const PORT = 4000;
const postList = require('./routes/posts')
const mangoose = require('mongoose');
const { default: mongoose } = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors')


//Middlewares

app.use(bodyParser.json())
app.use('/naruto/v1/api', postList);
app.use(cors)


//Home
app.get('/', (req, res)=>{
    res.send("Home")
})


//Db Connection
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("DB CONNECTED")
})


//App Listening
app.listen(PORT, ()=>{
    console.log(`port is listning on ${PORT}`);
})