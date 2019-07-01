// O express é responsável por roterizar a API.
const express = require('express')

//Autenticação
const authMiddleware = require('../middlewares/auth')

// Models
const Planet = require('../models/planet')


// Consumir API
const axios = require('axios')

// Gerencia as rotas.
const router = express.Router()

// Verifica autenticação.
router.use(authMiddleware)

//lista os planetas da franquia que estão na API swapi.co e informe quantos filmes cada um participou.
router.get('/swapi/:pageNumber', async(req, res) => {
    try {

        //Numero da página
        const page = req.params.pageNumber

        const api = await axios.get(`https://swapi.co/api/planets/?page=${page}`)
            .then((response) => {

                // Recebe os dados
                let dataApi = response.data.results
                    // Trata os dados
                const planetForFilms = dataApi.map(function(data_planet) {

                    let planet_name = data_planet.name
                    let films_count = data_planet.films.length

                    const numberFilmsForPlanet = {
                        planet: planet_name,
                        films: films_count
                    }


                    return numberFilmsForPlanet
                })

                res.send(planetForFilms)
            })



    } catch (err) {
        return res.status(400).send({ error: "Error loading planets" })
    }
})

//listar todos os planetas
router.get('/', async(req, res) => {
    try {

        // Lista os projetos trazendo também os dados do relacionamento com o user através do populate.
        const planets = await Planet.find().populate('user')
        return res.send({ planets })

    } catch (err) {
        return res.status(400).send({ error: "Error loading planets" })
    }
})

// Lista um único registro por id
router.get('/:planetId', async(req, res) => {
    try {

        // Lista os projetos trazendo também os dados do relacionamento com o user através do populate.
        const planet = await Planet.findById(req.params.planetId).populate('user')
        return res.send({ planet })

    } catch (err) {
        return res.status(400).send({ error: "Error loading planet" })
    }
})

// Lista um único registro por nome
router.get('/name/:planetName', async(req, res) => {
    try {

        // Lista os projetos trazendo também os dados do relacionamento com o user através do populate.
        const planet = await Planet.find({ name: req.params.planetName }).populate('user')
        return res.send({ planet })

    } catch (err) {
        return res.status(400).send({ error: "Error loading planet" })
    }
})

//cadastra um registro
router.post('/', async(req, res) => {
    try {

        //Espera os valores do request
        const planet = await Planet.create({...req.body, user: req.userId })
        return res.status(201).send({ planet })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error creating new planet' })
    }
})

// Atualiza o reg
router.put('/:planetId', async(req, res) => {
    try {

        // O mongoose sempre retorna uma Promisse por isso é necessário o await
        const planet = await Planet.findByIdAndUpdate(req.params.planetId, {
                ...req.body,
                user: req.userId
            }, { new: true }) // o new true é para o moongose retornar os valores atuais atualizados pois por padrao ele retorna os valores antigos.

        await planet.save()

        return res.status(201).send({ planet })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating new project' })
    }
})


// Exclui o planeta selecionado
router.delete('/:planetId', async(req, res) => {
    try {

        // Lista os projetos trazendo também os dados do relacionamento com o user através do populate.
        await Planet.findByIdAndRemove(req.params.planetId)
        return res.send()

    } catch (err) {
        return res.status(400).send({ error: "Error deleting planet" })
    }
})



module.exports = app => app.use('/planets', router)