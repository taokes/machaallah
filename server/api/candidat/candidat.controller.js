/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /candidats              ->  index
 * POST    /candidats              ->  create
 * GET     /candidats/:id          ->  show
 * PUT     /candidats/:id          ->  update
 * DELETE  /candidats/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Candidat = require('./candidat.model');

// Get list of candidats
exports.index = function(req, res) {
  Candidat.find(function (err, candidats) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(candidats);
  });
};

// Get a single candidat
exports.show = function(req, res) {
  Candidat.findById(req.params.id, function (err, candidat) {
    if(err) { return handleError(res, err); }
    if(!candidat) { return res.status(404).send('Not Found'); }
    return res.json(candidat);
  });
};

// Creates a new candidat in the DB.
exports.create = function(req, res) {
  Candidat.create(req.body, function(err, candidat) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(candidat);
  });
};

// Updates an existing candidat in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Candidat.findById(req.params.id, function (err, candidat) {
    if (err) { return handleError(res, err); }
    if(!candidat) { return res.status(404).send('Not Found'); }
    var updated = _.merge(candidat, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(candidat);
    });
  });
};

// Deletes a candidat from the DB.
exports.destroy = function(req, res) {
  Candidat.findById(req.params.id, function (err, candidat) {
    if(err) { return handleError(res, err); }
    if(!candidat) { return res.status(404).send('Not Found'); }
    candidat.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}