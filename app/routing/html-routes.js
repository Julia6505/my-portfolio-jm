
var express = require("express");
var path = require("path");

//html page routes; when user clicks on links, this is how the server knows where to go
module.exports = function(app) {

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname,"../../view/index.html"));
    });
    app.get("/about-me", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/about_me.html"));
    });
    
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../../view/portfolio.html"));
    });

    app.get("/contact-me", function (req, res) {
        res.sendFile(path.join(__dirname, "../../view/contact_me.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/index.html"));
    });
 
};