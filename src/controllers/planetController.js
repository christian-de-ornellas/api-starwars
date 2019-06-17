// O express é responsável por roterizar a API.
const express = require('express')

const authMiddleware = require('../middlewares/auth')

// Models
const Planet = require('../models/planet')


// Gerencia as rotas.
const router = express.Router()

// Verifica autenticação.
router.use(authMiddleware)

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

// Lista um único registro
router.get('/:planetId', async(req, res) => {
    try {

        // Lista os projetos trazendo também os dados do relacionamento com o user através do populate.
        const planet = await Planet.findById(req.params.planetId).populate('user')
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