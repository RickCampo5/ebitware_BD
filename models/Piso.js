const Schema = require('mongoose').Schema

const pisoSchema = new Schema({
  numero: Number,
  ventas_totales: Number,
  maquinas_registradoras:Array,
  cajeros:[{
    type:Schema.Types.ObjectId,
    ref:'Cajero'
  }]
})

module.exports = require('mongoose').model('Piso', pisoSchema)