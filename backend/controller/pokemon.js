const Pokemon = require('../models/pokemon');


const indexAll = async (req, res, next) => {
  const pokemon = await Pokemon.find();
  res.json({
    status: 'success',
    data: pokemon
  })
}

const index = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.find();
    console.log(pokemon)
    res.status(200).json({
      status: 'success',
      data: pokemon
    })
  } catch (error) {
    res.json({
      status: "error",
      err: error
    })
  }
}
const grabPokemon = async (req, res, next) => {
  const random = Math.random();
  try {
    if (random >= 0.5) {
      const doc = await Pokemon.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          data: doc
        }
      });
    }
    res.status(201).json({
      status: 'faild',

    })
  } catch (error) {
    console.log(error)
  }
};

const deletePokemon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Pokemon.findByIdAndDelete(id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  grabPokemon,
  index,
  indexAll,
  deletePokemon
}
