// Dependencies
const express = require('express');
const path = require('path');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up static app folder for project directory
app.use(express.static('app'));


require(path.join(__dirname, '/routing/htmlRoutes.js'))(app);
require(path.join(__dirname, '/routing/apiRoutes.js'))(app);


// Starts the server to begin listening
app.listen(PORT, ()=> {
    console.log("App listening on PORT " + PORT);
  })