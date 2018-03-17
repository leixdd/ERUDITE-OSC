const mongoose = require('mongoose');

module.exports = mongoose.Schema({

    project_id: {type: mongoose.Schema.Types.ObjectId, ref: 'coredataprojects', required: true},
    milestone_name: {type: String, required: true},
    milestone_startDate: {type: Date, required: true},
    milestone_endDate: {type: Date, required: true},
    milestone_desc: {type: String, required: true},
    tasks : [{type: mongoose.Schema.Types.ObjectId, ref: 'tasks'}],
    isCompleted: {type: Boolean, default: false},
    dateComplete: {type: Date},
    created_at: {type: Date, default: Date.now}

});