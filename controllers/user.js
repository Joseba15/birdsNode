const {request, response} = require('express')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')


const addUser = async(req, res) => {

    const { name, email, password, rol} = req.body;
    const user = new User({name, email, password, rol})
    

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );


    
    await user.save();

    res.json(
        user
    )

}   

module.exports = { addUser }