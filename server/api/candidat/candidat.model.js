'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CandidatSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Candidat', CandidatSchema);