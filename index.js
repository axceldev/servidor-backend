const express = require('express');

//CREAMOS EL SERVIDOR

const app = express();

//DEFINIMOS LAS RUTAS

app.get('/', (req, res) =>{ 
    res.send('Hola mundo');
})

app.listen(4000, () => {
    console.log('El servidor corre perfectamente.');
});