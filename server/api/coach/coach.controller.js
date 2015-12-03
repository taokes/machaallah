/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /coachs              ->  index
 * POST    /coachs              ->  create
 * GET     /coachs/:id          ->  show
 * PUT     /coachs/:id          ->  update
 * DELETE  /coachs/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Coach = require('./coach.model');

// Get list of coachs
exports.index = function(req, res) {
  Coach.find(function (err, coachs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(coachs);
  });
};

// Get a single coach
exports.show = function(req, res) {
  Coach.findById(req.params.id, function (err, coach) {
    if(err) { return handleError(res, err); }
    if(!coach) { return res.status(404).send('Not Found'); }
    return res.json(coach);
  });
};

// Creates a new coach in the DB.
exports.create = function(req, res) {
  Coach.create(req.body, function(err, coach) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(coach);
  });
};

// Updates an existing coach in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Coach.findById(req.params.id, function (err, coach) {
    if (err) { return handleError(res, err); }
    if(!coach) { return res.status(404).send('Not Found'); }
    var updated = _.merge(coach, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(coach);
    });
  });
};

// Deletes a coach from the DB.
exports.destroy = function(req, res) {
  Coach.findById(req.params.id, function (err, coach) {
    if(err) { return handleError(res, err); }
    if(!coach) { return res.status(404).send('Not Found'); }
    coach.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}