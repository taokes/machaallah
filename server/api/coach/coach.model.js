'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoachSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Coach', CoachSchema);