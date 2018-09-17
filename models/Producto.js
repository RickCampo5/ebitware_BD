const Schema = require('mongoose').Schema

const productoSchema = new Schema({
  nombre:String,
  precio:Number,
  numero_de_ventas:Number,
  cajeros:[{
    type: Schema.Types.ObjectId,
    ref:'Cajero'
  }]
})

module.exports = require('mongoose').model('Producto', productoSchema)