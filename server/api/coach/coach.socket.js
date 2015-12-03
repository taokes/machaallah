/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var coach = require('./coach.model');

exports.register = function(socket) {
  coach.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  coach.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coach:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coach:remove', doc);
}