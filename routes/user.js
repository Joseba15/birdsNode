const express = require('express')
const router = express.Router()
const {addUser} = require('../controllers/user')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validate-fields')


router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'Password must be between 6 and 12 characters').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
], addUser );

router.post('/login',[
    
    check('password', 'la contraseña es requerida').not().isEmpty(),
    check('correo', 'El correo es requerido').not().isEmpty(),
    validarCampos
], addUser );



module.exports = router