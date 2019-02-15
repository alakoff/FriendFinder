var friends = require('/data/friends.js');

const apiRoutes = function(app){

    // API route to show all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })

}

module.exports = apiRoutes;