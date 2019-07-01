const mongoose = require('../database')
    // criptografa senhas via hash
const bcrypt = require('bcryptjs')


const PlanetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    climate: {
        type: String,
        required: true
    },

    terrain: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },


    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Planet = mongoose.model('Planet', PlanetSchema)

module.exports = Planet