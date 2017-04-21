'use strict'
console.log("INFO :: Init Api");
var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1/course_favorites", (err, resp) => {
	if(!err){
		console.log("INFO :: Mongo works...");
		app.listen(port, function() {
			console.log("INFO :: API listen in port *:" + port);
		})
	} else {
		console.log(err);
	}
});

/*
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

//app.get('/', function (req, res) { res.send('Hello World!') })

mongoose.connect('mongodb://localhost/incidences');
var Schema = mongoose.Schema;
var Incidence = new Schema({
  id: { type: Number },
  type: { type: String },
  date: { type: String }
});
var Incidences = mongoose.model('incidences', Incidence);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// CRUD
app.get('/getAll', function (req, res, next) {
    var result = Incidences.find({}, function (err, incidences) {
        if(err)
            res.send("Error al leer en la BBDD");
        else
            res.send(incidences);
    });
 });

app.post('/create', function (req, res) {
    
 });
app.get('/get', function (req, res) { });
app.put('/edit', function (req, res) { });
app.delete('/edit', function (req, res) { });
app.path('/editField', function (req, res) { });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
*/
