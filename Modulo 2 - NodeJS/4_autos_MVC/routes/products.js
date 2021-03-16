const express = require('express');
const router = express.Router();

let productsController = require('../controllers/productsController');

router.get('/', productsController.index);

router.get('/porColor/:color', productsController.porColor);

router.get('/porMarca/:marca', function (req, res, next) {
    let marca = req.params.marca;
    let result = autos.porMarca(marca);
    res.send(result);
})
router.get('/porAnio/:anio?', function (req, res, next) {
    let anio = req.params.anio;
    if (anio == undefined) {
        res.send(autos.lista);
    }
    let result = autos.porAnio(anio);
    res.send(result);
})
router.get('/porModelo/:modelo/:anio?', function (req, res, next) {
    let modelo = req.params.modelo;
    let anio = req.params.anio;
    let result = autos.porModelo(modelo);
    if (anio != undefined) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].anio <= anio) {
                result.splice(i, 1);
            }
        }
    }
    res.send(result);
})
module.exports = router;