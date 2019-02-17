// Dependencies
const express = require('express');
const path = require('path');


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Sets up static app folder for project directory
app.use(express.static('app/public'));


//Sets up routing for html and api routes

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Starts the server to begin listening
app.listen(PORT, ()=> {
    console.log("App listening on PORT " + PORT);
  })