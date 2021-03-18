const express = require('express');
const router = express.Router();

let productsController = require('../controllers/productsController');


// A estas rutas se ingresa con el prefijo de "/products"

router.get('/', productsController.index);

router.get('/porColor/:color', productsController.porColor);

router.get('/porMarca/:marca', productsController.porMarca);


router.get('/porAnio/:anio?', productsController.porAnio);

router.get('/porModelo/:modelo/:anio?', productsController.porModelo);
module.exports = router;