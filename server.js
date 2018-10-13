var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var port = 8081;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

var Request = require('./request')

app.use('/Api', Request);

app.listen(port, function () {
    console.log("Server is running on : http://localhost:" + port + "/Api");
});