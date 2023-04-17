const { Schema, model } = require('mongoose');

const BirdsSchema = Schema({
    speciesCode: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    comName: {
        type: String,
        required: [true, 'La descripción es obligatoria'],       
    },
    sciName: {
        type: String,
        required: [true, 'La graduación es obligatoria'],
    },
});

module.exports = model( 'Birds', BirdsSchema );
