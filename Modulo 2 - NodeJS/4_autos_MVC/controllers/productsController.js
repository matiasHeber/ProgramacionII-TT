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
    
}


module.exports = productsController;