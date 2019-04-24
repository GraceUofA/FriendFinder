// Dependencies
// =============================================================
const Friends = require("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Display all possible friends then provides JSON
  app.get("/api/friends", function(req, res) {
      res.json(friends);
  
  });
	// Handle incoming survey results
  app.post("/api/friends", function(req, res) {

    const friendMatch = {
      name: "",
      photo: "",
      score: ""

    };

    const userAnswers = req.body;
    const userScores = userAnswers.scores;
    const totalDifference;

    for (const i = 0; i < friends.length; i++) {
      const currentMatch = friends[i];
      totalDifference = 0;

      for (const j = 0; j < currentMatch.scores.length; j++) {
        const currentMatchScore = currentMatch.scores[j];
        const currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentMatchScore));
      }

      if (totalDifference <= friendMatch.score) {
        // Reset the bestMatch to be the new friend.
        friendMatch.name = currentMatch.name;
        friendMatch.photo = currentMatch.photo;
        friendMatch.score = totalDifference;
      }
    }

    friends.push(userData);
    res.json(bestMatch);
  });
};







    }


  });


};