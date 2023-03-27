const express = require('express')
const router = express.Router()

// // Podríamos incluir middleware específico para este router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// // ruta raíz de este router
// router.get('/', function (req, res) {
//   res.send('Birds home page')
// })


const {getAbout,postBirds,getBirds} = require('../controllers/birds')

router.get('/',getAbout)
router.get('/get',getBirds)
router.post('/add',postBirds)


// router.delete('/delete')

module.exports = router