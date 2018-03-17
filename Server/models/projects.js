const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
const config =  require('../config/database');
const User = require('../models/users');
const Milestones = require('../models/milestones');
const CoreTasks = require('../Schemas/tasks');

const Tasks = mongoose.model('tasks', CoreTasks);
const CoreDataProject = require('../Schemas/projects');

const Projects = module.exports = mongoose.model('coredataprojects', CoreDataProject);

module.exports.newProject = function(data, callback){
    data.save(callback);
};

module.exports.getProjects = function(callback){
  Projects.find((err, call) => {
    User.populate(call, {path: 'owner'}, callback);
  });
};

module.exports.getProjectsAllPublic = function(callback){
  Projects.find({'privacy' : 0}, (err, call) => {
    User.populate(call, {path: 'owner'}, callback);
  });
};

module.exports.getProject = function(id, callback){
  Projects.find({members : {$elemMatch: {user: id}} }, (err, call) => {
    User.populate(call, {path: 'owner', select : '-__v -loginDetails.password'}, (err2, mile) => {
      Milestones.populate(mile, {path: 'milestones'}, callback);
    });
  });
};

module.exports.getProjectByID = function(id, callback){
  Projects.findById(id,(err, call) => {
    User.populate(call, {path: 'owner', select : '-__v -loginDetails.password'}, (err2, mile) => {
      Milestones.populate(mile, {path: 'milestones'}, (err3, task) => {
        Tasks.populate(task, {path: 'milestones.tasks'}, callback);
      });
    });
  });
}



//#region Project Team Module

module.exports.addUserToProject = function(uid, prid, role, callback){
  
  Projects.findByIdAndUpdate(prid, {$addToSet : {"members" : {"user" : uid, "role" : role}}}, callback);
};


module.exports.getAllMembers = function(prid, callback){
  Projects.findById(prid, (err, cb) => {
    User.populate(cb, {path: 'members.user', select: '-__v -loginDetails.password -following -messages -followers'}, callback);
  });
};
//#endregion



