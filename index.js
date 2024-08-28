const express = require('express');
const router = require('router')
const port  = 8000;
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.static(__dirname + "/public+/js"));


app.listen(port,function(err){
    if(err){
        console.log("Error in Creating Server :",err);
    }
    console.log("Server is Running Properly on port :",port);
});