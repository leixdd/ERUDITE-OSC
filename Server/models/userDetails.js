const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
const config =  require('../config/database');


const UserDetails = mongoose.Schema({
    
    u_id:{
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const details = module.exports = mongoose.model('userDetails',UserDetails);