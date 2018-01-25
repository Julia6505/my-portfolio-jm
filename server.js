var express = require("express");

//create express server and port
var app = express();
var PORT = 8080;

require("./app/routing/html-routes")(app);

// app.use(express.static('view'))

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});