const express = require('express')
const router = express.Router()
const {getBird,postBirds,getBirds,deleteBird,updateBird} = require('../controllers/birds')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validate-fields')
const { validateJWT } = require('../middlewares/validate-jwt')


router.get('/',getBirds);
router.get('/:id',[
    check('id','No es un id correcto').isMongoId(),
], getBird );
router.post('/',[
    validateJWT,
    check('speciesCode', 'El codigo del pajaro es obligatorio').not().isEmpty(),
    check('comName', 'El nombre comun debe de tener mas de 4 caracteres ').isLength({ min: 4 }),
    check('sciName',  'El nombre cientifico debe de tener entre 4 y 20 caracteres ').isLength({ min: 4 , max: 20}),
    validarCampos
], postBirds );

router.put('/:id',[
    validateJWT,
    check('id','No es un id correcto').isMongoId(),
    check('speciesCode', 'El codigo del pajaro es obligatorio').not().isEmpty(),
    check('comName', 'El nombre comun debe de tener mas de 4 caracteres ').isLength({ min: 4 }),
    check('sciName',  'El nombre cientifico debe de tener entre 4 y 20 caracteres ').isLength({ min: 4 , max: 20}),
    validarCampos
], updateBird );

router.delete('/:id', [
    validateJWT,
    check('id','No es un id correcto').isMongoId(),
    hasRol('ADMIN_ROLE'),
    validarCampos
],deleteBird);

module.exports = router