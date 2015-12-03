/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var candidat = require('./candidat.model');

exports.register = function(socket) {
  candidat.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  candidat.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('candidat:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('candidat:remove', doc);
}