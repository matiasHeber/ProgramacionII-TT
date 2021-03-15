const express = require('express');
const router = express.Router();
let autos = require('../routes/autos/index');
router.get('/', function (req, res, next) {
    res.send(autos.lista);
})
router.get('/porColor/:color', function (req, res, next) {
    let color = req.params.color;
    let result = autos.porColor(color);
    res.send(result);
})
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