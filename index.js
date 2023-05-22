const express = require('express');
require('./models/db')
const {dbConnection} = require('./database/config')
const app= express();
require('dotenv').config()
const birds = require('./routes/birds')
const user = require('./routes/user')
const upload= require('./routes/uploads')
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;



app.use(express.json());

async function connectAtlas(){
    await dbConnection()
}
connectAtlas()

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


// Configuration 
cloudinary.config({
  cloud_name: "ddhrew5cw",
  api_key: "316372844593531",
  api_secret: "97Osw2pioq7RvaH6aqswrre0TZg"
});


app.use('/birds', birds)
app.use('/user',user)
app.use('/upload',upload)


app.listen(process.env.PORT);
console.log(`Server listening on port ${process.env.PORT}`);