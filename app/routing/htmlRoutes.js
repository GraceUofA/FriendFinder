// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {
	// index route that displays survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//index route that leads to home.html
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}; 