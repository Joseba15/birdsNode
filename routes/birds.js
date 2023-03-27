const express = require('express')
const router = express.Router()

// Podríamos incluir middleware específico para este router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// ruta raíz de este router
router.get('/', function (req, res) {
  res.send('Birds home page')
})

// Ruta about
router.get('/about', function (req, res) {
  res.send('About birds')
})

router.post('/add',function(req,res){
    const {raza, color_plumas, peso  } = req.body
    const pajaro = {raza, color_plumas, peso }
    res.json(pajaro)

})

router.delete('/delete')

// Exportamos el router para poder utilizarlo fuera
module.exports = router