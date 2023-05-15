const { Schema, model } = require('mongoose');

const BirdsSchema = Schema({
    speciesCode: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
        unique: true
    },
    comName: {
        type: String,
        required: [true, 'El nombre comun es obligatoria'],       
    },
    sciName: {
        type: String,
        required: [true, 'El nombre cientifico es obligatoria'],
    },
    img:{
        type:String
    }
});

module.exports = model( 'Birds', BirdsSchema );
