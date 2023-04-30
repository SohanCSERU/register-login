const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

//URI added 
require('dotenv/config');

var corsOptions = {
    origin: "http://localhost:3002"
};

app.use(cors(corsOptions));

//parse request of content type applicaion/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    cookieSession({
        name: "backend Session",
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);

const db = require("./models/User");
const Role = db.role;

mongoose
    .connect(process.env.MONGO_URI,
        {useNewUrlParser: true})
        .then( ()=>{
            console.log("Connected to MONGODB Database");
            // initial();
        })
        .catch( (err) =>{
            console.log("Connection Error " ,err);
            process.exit();
        });

//route
app.get('/', (req, res) => {
    res.json({message: "welcome to Register applicaion!"});
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

