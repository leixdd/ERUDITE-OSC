const mongoose = require('mongoose');
const User = require('../models/users');
const Project = require('../models/projects');
const SchemaMileStone = require('../Schemas/milestones');
const CoreTasks = require('../Schemas/tasks');
  
  
const Tasks = module.exports = mongoose.model('tasks', CoreTasks);
const Milestone = mongoose.model('milestones', SchemaMileStone);


module.exports.getTasks = function(id, callback){
    Tasks.find({"milestone_id": id}, (err, cb) => {
        User.populate(cb, {path: 'task_assigned', select: '-loginDetails.password'}, callback);
    });
}

module.exports.getTasksByCurrentUser = function(id, callback){
    Tasks.find({"task_assigned": id, "task_send": false}, callback);
}

module.exports.addTask = function(mile_id, data, callback){
    data.save((err, cb) => {
        Milestone.findByIdAndUpdate(mile_id, {$addToSet : {'tasks': cb._id} }, callback);
    });
}

module.exports.updateProgress = function(task_id, data, callback){
    Tasks.findByIdAndUpdate(task_id, {$set : {'isCompleted' : data} }, callback);
}

module.exports.complyTask = function(task_id, data, callback){
    Tasks.findByIdAndUpdate(task_id,  {$set : {'task_submit_comment': data.task_submit_comment, 'task_file_attachment' : data.task_file_attachment, 'task_send': true, 'task_submit_date' : Date.now()}} , callback);
}

module.exports.updateSubmission = function(task_id, data, callback){
    if(data){
        Tasks.findByIdAndUpdate(task_id, {$set : {'task_confirmed' : data, 'isCompleted' : data }}, callback);
    }else{
        Tasks.findByIdAndUpdate(task_id, {$set : {'task_confirmed' : data, 'isCompleted' : data, 'task_send' : data }}, callback);
    }
};

  