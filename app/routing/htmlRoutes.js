var path = require('path');
var htmlRoutes = function(app){


// Home route
// Catch All route


// Survey route
app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});


// Catch all route back to the home page
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

}

module.exports = htmlRoutes;