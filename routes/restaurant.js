import express from 'express';
const router = express.Router();

import Restaurant from '../models/restaurant';

router.post('/new-restaurant', async (req, res) => {
  const body = req.body;
  try {
    const restaurantDB = await Restaurant.create(body);
    return res.json({ message: 'Restaurante añadido con exito', restaurantDB });
  } catch (error) {
    return res.status(500).json({ message: 'Ocurrio un error al añadir el restaurante', error });
  }
});

//Get con parametros
router.get('/restaurant/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const restaurantDB = await Restaurant.findById({ _id });
    if (!restaurantDB) {
      return res.status(400).json({ message: 'No se encontró el restaurante' });
    }
    return res.json({ restaurantDB });
  } catch (error) {
    return res.status(400).json({ message: 'Ocurrio un error al recuperar el restaurante', error });
  }
});

//Get All
router.get('/restaurant', async (req, res) => {
  try {
    const restaurantsDB = await Restaurant.find();
    res.json({ restaurantsDB });
  } catch (error) {
    return res.status(400).json({ message: 'Ocurrio un error al recuperar los restaurantes', error });
  }
});

//Delete
router.delete('/restaurant/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const restaurantDB = await Restaurant.findByIdAndDelete({ _id });
    if (!restaurantDB) {
      return res.status(400).json({ message: 'No se encontró el restaurante' });
    }
    res.json({ restaurantDB });
  } catch (error) {
    return res.status(400).json({ message: 'Ocurrio un error al borrar el restaurante', error });
  }
});

//put
router.put('/restaurant/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const restaurantDB = await Restaurant.findByIdAndUpdate(_id, body, { new: true });

    return res.json({ restaurantDB });
  } catch (error) {
    return res.status(400).json({ message: 'Ocurrio un error al actualizar el restaurante', error });
  }
});

router.put('/rest');

//exportacion de router
module.exports = router;
