'use strict'

var Incidence = require("../models/incidenceModel");

function testServer(req, res) {	
	res.status(200).send({
		message: "Servidor running..."
	})
}

function createIncidence(req, res) {
    var params = req.body;
    var incidence = new Incidence();

    incidence.creator = params.creator,
	incidence.dateCreation = new Date(),
    incidence.lastModify = new Date(),
    incidence.description = params.description,
    incidence.comment = params.comment;

    incidence.save((err, incidenceStored) => {
		if (err) {
			res.status(500).send({
				message: "Error al guardar incidencia"
			})
		} else {
			res.status(200).send({
				message: "Incidencia guardada: " + incidenceStored
			})
		}
	});
}

module.exports = {
	testServer,
    createIncidence
}