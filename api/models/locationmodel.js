'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  content: String,
});

module.exports = mongoose.model('Locations', LocationSchema);
