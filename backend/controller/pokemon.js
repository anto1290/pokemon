const Pokemon = require('../models/pokemon');


const grabPokemon = async (req, res, next) => {
  const random = Math.random();
  if (random >= 0.5) {
    const doc = await Pokemon.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  }
  next();
};

module.exports = {
  grabPokemon
}
