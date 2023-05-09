// const db = require("diskdb");
// db.connect('./data',['birds'])

const { response, request } = require('express');
const Bird = require('../models/birds');


//GET
async function getBirds(req, res) {
    const {comName,sciName} = req.query
    const query = {comName,sciName}
    
    for (const key in query) {
        if (query[key] === undefined) {
            delete query[key];
        }
    }
    // const birds =  db.birds.find(query)
    const birds = await Bird.find(query)
    res.json(birds)
}


//GET
async function getBird(req, res) {
    const id = req.params.id
    const bird = await Bird.find({ _id: id });
    if (bird.length) {
        res.json(bird);
    } else {
        res.json({ message: `El pajaro con id ${id} no existe`})
    }
}


//POST
async function postBirds(req, res){  
    const {speciesCode, comName, sciName  } = req.body
    const bird = new Bird ({speciesCode, comName, sciName })

    await bird.save();
    res.json(bird);
}

//DELETE
async function deleteBird(req , res ) {
    const id = req.params.id
    const bird = await Bird.remove({ _id: id });
    res.json(bird);
}

//PUT
async function updateBird(req, res ) {

    const id = req.params.id;
    const {_id,...birdBody} = req.body;
    const updBird = await Bird.findByIdAndUpdate(id,birdBody);

    res.json(updBird)
}

module.exports = { getBirds,postBirds,getBird,deleteBird,updateBird}