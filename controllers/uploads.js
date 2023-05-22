const { request, response } = require('express')
const {uploadFile} = require('../helpers/uploadFiles')
const User = require('../models/user');
const Birds = require('../models/birds')

const uploadFileC= async (req = request, res = response) => {
    const file = req.files
    try {
       const name =  await uploadFile(file)
       console.log(file);
    //    const res = cloudinary.uploader.upload( file , {public_id: "olympic_flag"})

        res.json(name);

    } catch (error) {
        res.status(400).json({msg:"Error subiendo fichero"})    
    }
    

}

const updateImage= async (req = request, res = response) => {
    
    const { collection, id } = req.params;
    let model;

    if (collection=='user') {
        model = await User.findById(id);

    }else if(collection=='birds'){
        model = await Birds.findById(id);
    }

    const name = await uploadFile(req.files, undefined, collection);
    model.img = name;
    res.status(200).json({model});

}




module.exports = {uploadFileC,updateImage}
