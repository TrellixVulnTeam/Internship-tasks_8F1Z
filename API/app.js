const express = require("express");
const mongooseDB = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongooseDB.connect("mongodb+srv://naisargi:mongoose@cluster0.dnvnh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if(err) console.log(err)
    else console.log("Connected to database");
});

const user=require('./Routes/user');
const posts=require('./Routes/posts');

app.use('/user',user);
app.use('/posts',posts);

app.get("/", (req, res) => {
    res.send("Welcome to the home page!")
});

app.listen(3000, () => {
    console.log('Server started on PORT 3000')
 });