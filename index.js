const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');

//CREAMOS EL SERVIDOR

const app = express();

//CONECTAMOS A LA DB

conectarDB();

app.use(express.json());

app.use(cors());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor corre perfectamente.');
});