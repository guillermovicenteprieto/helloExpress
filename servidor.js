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

app.get('/fecha', (req, res) => {
    res.send(`<h1  style=" color: green">Hoy es ${moment().format('DD/MM/YYYY')}</h1>`)
})


app.get('/fyh', (req, res) => {
    res.send({fyh: moment().format('YYYY-MM-DD HH:mm:ss')})
})

app.get('/hora', (req, res) => {
    res.send(`<h1  style=" color: red"> hora actual ${moment().format('HH:mm:ss')}</h1>`)
})


app.get('/contacto', (req, res) => {
    res.send(`<h1  style=" color: red"> esta es la página de conatcto!</h1>`)
})

