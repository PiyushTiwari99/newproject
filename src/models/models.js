const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        requried: true,
        // Unique: true
    },
    password: {
        type: String,
        requried: true,
        //Unique: true
    }


}, { timestamps: true })


module.exports = mongoose.model('UserData', userSchema)