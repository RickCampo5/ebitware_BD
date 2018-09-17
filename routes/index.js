const express = require('express');
const router  = express.Router();
const Piso = require('../models/Piso');
const Cajero = require('../models/Cajero');
const Producto = require('../models/Producto');

/* GET home page */
router.get('/todo', (req, res, next) => {
  Piso.find()
  .then(pisos=>{
    return res.status(200).json(pisos)
  })
  .catch(e=>next(e))
});

router.get('/ventas_por_prodcuto', (req,res,next)=>{
  Producto.find({},{numero_de_ventas:1}).sort({numero_de_ventas:-1})
  .then(productos=>{
    return res.status(200).json(productos)
  })
  .catch(e=>next(e))
});

router.get('/informe_Completo_de_ventas', (req,res,next)=>{
  Cajero.find({},{nombre:1,}).
  populate("producto","piso")
  .then(cajero=>{
    return res.status(200).json(cajero)
  })
  .catch(e=>next(e))
})

router.get('/ventas_por_piso', (req,res,next)=>{
  Piso.find({},{ventas_totales:1}).
  then(ventas=>{
    return res.send(200).json(ventas)
  })
  .catch(e=>next(e))
})

router.get('/cajeros',(req,res,next)=>{
  Cajero.find().
  then(cajero=>{
    return res.send(200).json(cajero)
  })
})

router.get('/ventas_menores_5000',(req,res,next)=>{
  Piso.find({ventas_totales:{$lt:5000}})
  .populate("cajero")
  .then(cajeros=>{
    return res.send(200).json(cajeros)
  })
  .catch(e=>next(e))
})
module.exports = router;
