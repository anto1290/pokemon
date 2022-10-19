const mongoose = require('mongoose');


const pokemonSchema = new mongoose.Schema({
  idPokemon: Number,
  nickname: String
}, {
  timestamps: true
})

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;
