const autos = require('../modules/autos');

let productsController = {
    index: (req,res) => {
        res.send(autos.lista);
    },

    porColor: (req, res, next) => {
        let color = req.params.color;
        let result = autos.porColor(color);
        res.send(result);
    },

    porMarca: function (req, res, next) {
        let marca = req.params.marca;
        let result = autos.porMarca(marca);
        res.send(result);
    },

    porAnio: function (req, res, next) {
        let anio = req.params.anio;
        if (anio == undefined) {
            res.send(autos.lista);
        }
        let result = autos.porAnio(anio);
        res.send(result);
    },

    porModelo: function (req, res, next) {
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
    }
    
}


module.exports = productsController;