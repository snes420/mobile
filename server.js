var PORT = 3000;
var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.compress());

app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});