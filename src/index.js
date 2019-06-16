/**
 * # API STAR WARS
 * O **objetivo** desta API é gerar e gerenciar as informações dos planetas da franquia **STARWARS** e este arquivo é responsável por toda a estrutura da **API**.
 */

// O express é responsável por roterizar a API.
const express = require('express')

// Instâncio aqui o express
const app = express()

// O body-parser é responsável por gerenciar o app no modelo **REST**.
const bodyParser = require('body-parser')

// Aqui eu padronizo o body parser para sempre retornar **JSON**.
app.use(bodyParser.json())

//Responsável por entender os parametros via url.
app.use(bodyParser.urlencoded({ extended: false }))

//Rota de autenticação
require('./controllers/authController')(app)

//Ativa a API na porta 3000
app.listen(3000)