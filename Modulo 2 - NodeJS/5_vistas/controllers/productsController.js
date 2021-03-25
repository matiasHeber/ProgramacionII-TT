const autos = require('../modules/autos');

let productsController = {
    index: (req,res) => {
        res.render('productos', {
            listaDeAutos: autos.lista,
            title: 'Todos los autos'
        });
    },

    porColor: (req, res, next) => {
        let color = req.params.color;
        let result = autos.porColor(color);
        res.render('productos', {
            listaDeAutos: result,
            title: 'Autos de color' + color
        });
    },

    porMarca: function (req, res, next) {
        let marca = req.params.marca;
        let result = autos.porMarca(marca);
        res.render('productos', {
            listaDeAutos: result,
            title: 'Marca '+marca
        });
    },

    porAnio: function (req, res, next) {
        let anio = req.params.anio;
        if (anio == undefined) {
            res.render('productos', {
            listaDeAutos: autos.lista,
            title: 'No tenemos autos del año '+anio
        });
        }
        let result = autos.porAnio(anio);
        res.render('productos', {
            listaDeAutos: result,
            title: 'Autos del año ' + anio
        });
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
        res.render('productos', {
            listaDeAutos: result,
            title: 'Autos de modelo ' + modelo
        });
    }
    
}


module.exports = productsController;