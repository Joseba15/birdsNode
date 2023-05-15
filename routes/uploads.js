const express = require('express')
const router = express.Router()
const {uploadFileC} = require('../controllers/uploads');

router.post('',uploadFileC);
router.put('/:colection/:id',[], updateImage)
