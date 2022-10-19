var express = require('express');
var router = express.Router();
const pokemonController = require('../controller/pokemon');
/* GET home page. */

router.post('/', pokemonController.grabPokemon);

module.exports = router;
