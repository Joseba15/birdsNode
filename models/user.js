const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatoria'],       
    },
    password: {
        type: String,
        required: [true, 'La constrasena es obligatoria'],
    },
    rol:{
        type: Rol,
        require: true
    }
});

module.exports = model( 'User', UserSchema );