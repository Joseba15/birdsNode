const express = require('express');
require('./models/db')
const {dbConnection} = require('./database/config')
const app= express();
require('dotenv').config()
const birds = require('./routes/birds')
const user = require('./routes/user')

app.use(express.json());

async function connectAtlas(){
    await dbConnection()
}
connectAtlas()

app.use('/birds', birds)
app.use('/user',user)


app.listen(process.env.PORT);
console.log(`Server listening on port ${process.env.PORT}`);