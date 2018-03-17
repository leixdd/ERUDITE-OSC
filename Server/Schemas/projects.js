const mongoose = require('mongoose');

module.exports = mongoose.Schema({

    name: { type: String, required: true},
    desc: { type: String, required: true},
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'coredateusers'},
    endDate: {type: Date},
    startDate: {type: Date},
    privacy: {type: Number, default: 0},
    created_at : {type: Date, default: Date.now},

    members : [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'coredateusers'}, 
        role: { type: Number, default: 2},
        joinDate: {type: Date, default: Date.now()}
    }],

    milestones : [{type: mongoose.Schema.Types.ObjectId, ref: 'milestones'}],

    types: []

});

