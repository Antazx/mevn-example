import express from 'express';
const router = express.Router();

import Restaurant from '../models/restaurant';

router.post('/new-restaurant', async (req, res) => {
  //req contiene toda la info de la solicitud
  const body = req.body;

  try {
    const restaurantDB = await Restaurant.create(body);
    return res.status(200).json({ message: 'Restaurante añadido con exito', restaurantDB });
  } catch (error) {
    return res.status(500).json({ message: 'Ocurrio un error al añadir el restaurante', error });
  }
});

//exportacion de router
module.exports = router;
