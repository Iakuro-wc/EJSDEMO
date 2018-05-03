//message

var express = require('express');
var app = express();

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.listen(3000, () => {
	console.log("listening to port 3000");
})