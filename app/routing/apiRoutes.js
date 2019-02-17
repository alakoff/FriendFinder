var friends = require('../data/friends');

var apiRoutes = function(app){

    // API route to show all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })

    // Create New Friend  and Match
    app.post("/api/friends", function(req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        var newFriend = req.body;
        

        // Track total differences values for matching
        var curDiff = 0;

        // Match New Friend
        var newFriendScore = 0;


        // Determine total score values for new friend
        for (i=0;i<newFriend.scores.length;i++) {
            newFriendScore += parseInt(newFriend.scores[i]);
        }


        // Loop through all existing friends
        for (f=0;f<friends.length;f++) {

            // Determine total score values for each existing friends and then compare to new friend score
            var friendsTotalScore = 0;

            // Determine total score values for each friend
            for (i=0;i<10;i++) {
                friendsTotalScore += parseInt(friends[f].scores[i]);
            }

            if (curDiff === 0) {
                
                curDiff = Math.abs(newFriendScore - friendsTotalScore);
                prevDiff = curDiff;
                friendMatchName = friends[f].name;
                friendMatchPhoto = friends[f].photo;

            } else {

                curDiff = Math.abs(newFriendScore - friendsTotalScore);
                if (curDiff < prevDiff) {
                    prevDiff = curDiff;
                    friendMatchName = friends[f].name;
                    friendMatchPhoto = friends[f].photo;
                }
            }
        
        }

        // Console log friend match
        console.log('name: ',friendMatchName);
        console.log('photo: ',friendMatchPhoto);

        //Open modal to display the match

    
        // Add the json the user sent to the friends array
        friends.push(newFriend);
    
        //Create json object to send back
        var match = {
            name: friendMatchName,
            photo: friendMatchPhoto
        }

        // res.json(newFriend);
        res.send(match);
        

    });

}

module.exports = apiRoutes;