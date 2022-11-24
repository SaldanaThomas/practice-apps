const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');

const glossarySchema = mongoose.Schema({
  term: {type: String, unique: true},
  definition: String
});

module.exports = mongoose.model('Glossary', glossarySchema);