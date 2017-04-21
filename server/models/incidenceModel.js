'use strict' 

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incidenceSchema = Schema({
    creator: String,
	dateCreation: Date,
    lastModify: Date,
    description: String,
    comment: String
});

module.exports = mongoose.model("incidenceModel", incidenceSchema);

/*
    db.incidence.save(id: 0, creator:"sergio", dateCreation: Date(), description: "--", comment: "--");
*/