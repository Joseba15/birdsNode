const express = require('express')
const router = express.Router()
const {uploadFileC,updateImage} = require('../controllers/uploads');

router.post('',uploadFileC);
router.put('/:colection/:id',[], updateImage)



module.exports = router;
