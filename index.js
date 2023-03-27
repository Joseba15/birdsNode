const express = require('express');
const app= express();
const birds = require('./routes/birds')


app.use(express.json());
// app.get('/holamundo',function (req,res) {
//     res.json( {msg : 'hola mundo'})
// })


// app.get('/end',function (req,res) {
//     console.log('hola');
//     res.end()
// })


// app.get('/download',function (req,res) {
//     res.download('./download.txt')
// })


// app.get('/redirect',function (req,res) {
//     res.redirect('/holamundo');
// })

app.use('/birds', birds)


app.listen(3000)