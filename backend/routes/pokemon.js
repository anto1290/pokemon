var express = require('express');
var router = express.Router();
const pokemonController = require('../controller/pokemon');
/* GET home page. */

router.route('/')
  .get(pokemonController.indexAll)
  .post(pokemonController.grabPokemon);
router.route('/:id').get(pokemonController.index).delete(pokemonController.deletePokemon)

module.exports = router;
