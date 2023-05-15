const { request, response } = require('express')
const {uploadFile} = require('../helpers/uploadFiles')

const uploadFileC= async (req = request, res = response) => {
    const file = req.files
    try {
       const name=  await uploadFile(file)
        res.json(name);

    } catch (error) {
        res.status(400).json({msg:"Error subiendo fichero"})    
    }
    

}

const updateImage= async (req = request, res = response) => {
    
    const { collection, id } = req.params;
    if (collection=='user') {
        

    }else if(collection=='user'){
        
    }

}




module.exports = {uploadFileC,updateImage}
