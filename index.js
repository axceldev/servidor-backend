const express = require('express');
const conectarDB = require('./config/db')

//CREAMOS EL SERVIDOR

const app = express();

//CONECTAMOS A LA DB

conectarDB();

//DEFINIMOS LAS RUTAS

app.get('/', (req, res) =>{ 
    res.send('Hola mundo');
})

app.listen(4000, () => {
    console.log('El servidor corre perfectamente.');
});