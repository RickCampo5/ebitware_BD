const Schema = require('mongoose').Schema

const cajeroSchema = new Schema({
  nombre:String,
  codigo:String,
  ventas:Number,
  productos:[{
    type:Schema.Types.ObjectId,
    ref:'Producto'
  }],
  piso:[{
    type: Schema.Types.ObjectId,
    ref:'Piso'
  }]
})

module.exports = require('mongoose').model('Cajero', cajeroSchema)