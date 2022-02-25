const express = require('express');
const moment = require('moment');
const app = express();
const Port = 8080
const server = app.listen(Port, () => {
    console.log(`escuchando al puerto ${server.address().port}`);
})

server.on('error', err => {
    console.log(`error en el servidor ${err}`);
})

app.get('/', (req, res) => {
    res.send(`<h1 style=" color: blue">Bienvenido al servidor express</h1>`)
})

let visitas = 0;
app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`<h1>la candidad de vistas es ${visitas}</h1>`)
})

app.get('/fyh', (req, res) => {
    res.send({fyh: moment().format('YYYY-MM-DD HH:mm:ss')})
})

