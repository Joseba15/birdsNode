const {request, response} = require('express')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')


const addUser = async(req, res) => {

    const { name, email, password, rol} = req.body;
    const user = new User({name, email, password, rol})
    
    const existeEmail = await User.findOne({correo});
        if (existeEmail){
            return res.status(400).json({
                msg: 'El correo ya está registrado'
            });
        }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );


    
    await user.save();

    res.json(
        user
    )

}

async function login(req, res)
    let {email, password}= req.body;
    const user = await User.findone(email)
    if(!user){
        return res.status(400) .json( {mensage: 'El usuario no existe'})
        if(validPassword){
            return res.status(400).json({mensage: 'La contraseña no es correcta'})
        }else{
            res.json( (user))
        }   
    }

module.exports = { addUser }