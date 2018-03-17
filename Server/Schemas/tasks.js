const mongoose = require('mongoose');

module.exports  = mongoose.Schema({

    milestone_id : {type: mongoose.Schema.Types.ObjectId, ref: 'coredataprojects'},
    
    task_name: {type: String},
    task_startDate: {type: Date},
    task_endDate: {type: Date},
    task_desc: {type: String},
    task_assigned: {type: mongoose.Schema.Types.ObjectId, ref: 'coredateusers'},
    
    task_file_attachment : {type: String, default: ""},
    task_submit_comment: {type: String, default: ""},
    task_submit_date : {type: Date},

    task_send : {type: Boolean, default: false},
    task_confirmed : {type: Boolean, default: false},
    isCompleted: {type: Boolean, default: false},

    dateComplete: {type: Date},
    created_at: {type: Date, default: Date.now}
});