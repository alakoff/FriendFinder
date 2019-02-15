const path = require('path');
const htmlRoutes = function(app){


// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

// Survey route
app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });

// Catch All route
app.use('', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

}

module.exports = htmlRoutes;