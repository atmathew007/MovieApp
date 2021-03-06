var express = require("express");
var app = express();

app.set("view engine","ejs");

var request = require("request");

app.get("/",function(res, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var skey = req.query.key;
    var url = "http://www.omdbapi.com/?s="+skey+"&apikey=thewdb";
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data : data});
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is running");
});