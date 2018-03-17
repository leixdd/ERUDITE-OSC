const mongoose = require('mongoose');
const CoreDataProject = require('../Schemas/projects');
const CoreMilestones = require('../Schemas/milestones');
const CoreTasks = require('../Schemas/tasks');
const User = require('../models/users');

const Milestones = module.exports = mongoose.model('milestones', CoreMilestones);
const Projects = mongoose.model('coredataprojects', CoreDataProject);
const Tasks = mongoose.model('tasks', CoreTasks);

module.exports.addMilestone = function(id, data, callback){
    data.save((err, cb) => {
        if (err) throw err;
        Projects.findByIdAndUpdate(id, {$addToSet : {'milestones' : cb._id}}, callback);
    });
};

module.exports.getMilestone = function(id, callback){
  Milestones.findById(id, (err, cb) => {
    Projects.populate(cb, {path: 'project_id'}, callback);
  });
};

module.exports.getMilestones = function(prjm_id, callback){
    Milestones.find({project_id : prjm_id}, (err, proj) => {
        Tasks.populate(proj, {path: 'tasks'}, (err, cb) => {
            Projects.populate(cb, {path: 'project_id'}, callback);
        });
    });
};

module.exports.updateTaskProgress = function(id, stat, callback){
    Milestones.findByIdAndUpdate(id, {$set : {'isCompleted' : stat}}, callback);
};


module.exports.deleteMileStone = function(id, callback){
    Milestones.deleteOne({"_id" : id}, callback);  
};