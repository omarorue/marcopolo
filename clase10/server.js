const express = require('express')
const genUsuario = require('./lib/genusuario')
const {RecursoAgregado, BadRequestError, NotFound, InternalServerError} = require('./lib/codigosHTTP')
const _ = require('underscore')

const app = express()

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());

let arrUsuarios = []

app.get('/api/crearusuarios', (request, response) => {
    arrUsuarios.push(genUsuario())
    arrUsuarios.push(genUsuario())
    arrUsuarios.push(genUsuario())
    arrUsuarios.push(genUsuario())
    arrUsuarios.push(genUsuario())
    response.status(200).send(JSON.stringify({status:'ok'}))
})

app.get('/api/inventarusuario', (request, response) => {
    let nuevoUsuario = genUsuario()
    response.status(200).send(JSON.stringify(nuevoUsuario))
})

app.get('/api/usuario/:id', (request, response) => {
    let id = request.params.id
    let result = _.filter(arrUsuarios, z => z.id === id)

    if (result.length === 0) {
        response.status(404).send(JSON.stringify({status:'NOT FOUND'}))
    }
    else {
        response.status(200).send(JSON.stringify(result[0]))
    }
})

app.get('/api/usuario', (request, response) => {
    let objQuery = {}

    if(request.query['firstName']) objQuery.firstName = request.query['firstName'];
    if(request.query['lastName']) objQuery.lastName = request.query['lastName'];

    // Ver si se filtra y si no retonrar el array vacio

    response.status(200).send(arrUsuarios)
})

app.post('/api/usuario', (request, response) => {
    // Tengo que tomar el body e insertarlo en mongodb
    console.log(request.body)
    let nuevoUsuario = request.body
    arrUsuarios.push(nuevoUsuario)
    response.status(201).send(JSON.stringify({status:'ok'}))
})

app.put('/api/usuario/:id', (request, response) => {
    // No es posible modificar el id de base de datos.
    if (request.body._id) {
        response.status(400).end(JSON.stringify({Error: 'No es posible modificar un campo especificado.'}));
        return;
    }

    response.status(200).end(JSON.stringify({resultado: 'El usuario fue modificado.'}));
})

app.delete('/api/usuario/:id', (request, response) => {
    // Buscar x id y si no se encuentra tirar un 404
    // si se encuentra borrarlo
    // si no se envia el id tirar un 400 Bad Request
})

app.listen(3000, err => {
    console.log('escuchando el puerto 3000')
})