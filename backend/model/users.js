const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas')

//Define a schema
var Schema = mongoose.Schema;

const Usuarios = new Schema({
    email:{type:String},
    nome:{type:String },
    senha: {type:String},
    token:{type:String},
    nrsec: {type:Number}
});

const UsuariosModel = mongoose.model('usuarios',Usuarios);



module.exports = {UsuariosModel};