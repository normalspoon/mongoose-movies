const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    breed: String
  });


  module.exports = mongoose.model('Cat', catSchema)