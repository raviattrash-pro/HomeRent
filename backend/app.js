const express = require('express');
const mongoose = require('mongoose');
const router = require("./router/KRENT-routes")
const cors = require('cors');
const app = express();

//middleware 

app.use(express.json());
app.use(cors());
app.use("/rent", router);

mongoose.connect("mongodb+srv://admin:guSxO2NyCgCFcmBi@cluster0.wacgalg.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("You are Connect to the data base")) //promise
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));

//console.log("Hello RaviPrasad Your Application Running !!!!!");
//guSxO2NyCgCFcmBi

/*app.use("/", (req, res, next) => {
    res.send("This is our Starting app");
});*/