const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Habilita o CORS
app.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Registrar os models

//Criar rotas
const index = require('./routes/index')

app.use('/', index)
module.exports = app;