const db = require("diskdb");
db.connect('./data',['birds'])

function getAbout(req, res){  
    res.status(200).send('About birds');
}




//GET
function getBirds(req, res) {
    const birds =  db.birds.find(query)
    res.json(birds)
}

//POST
function postBirds(req, res){  
    res.status(200).send('About birds');

    const {raza, color_plumas, peso  } = req.body
    const pajaro = {raza, color_plumas, peso }
    res.status(200).send(pajaro);
}

module.exports = { getAbout,postBirds,getBirds }