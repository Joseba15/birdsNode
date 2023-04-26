const {request, response} = require('express')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const { genJWT } = require('../helpers/genJWT')



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

 const login = async(req=request, res=response) =>{
    const { email, password} = req.body
    const user = await User.findone(email)
    const validPassword = bcryptjs.compareSync(password, user.password) 

    if(!user){
        res.status(400) .json( {mensage: 'El usuario no existe'})
    if(!validPassword){
        return res.status(400).json({mensage: 'La contraseña no es correcta'})
    }else{
        const token = await genJWT(user._id);
        res.json({user,token})
    }   
}
}

const changeState = async(req = request, res= response) => {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, {"state": false})
    res.json({ user})
}

module.exports = { addUser,login,changeState }