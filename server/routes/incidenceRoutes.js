'use strict'

var express =  require('express');
var incidenceController = require("../controllers/incidenceController");
var api = express.Router();

api.get("/testServer/", incidenceController.testServer);
api.post("/createIncidence/:creator?/:description?/:comment?", incidenceController.createIncidence);

module.exports = api;