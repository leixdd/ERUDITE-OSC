const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');

const Project = require('../models/projects');
const Milestones = require('../models/milestones');
const Tasks = require('../models/tasks');
const Users = require('../models/users');



router.post('/analytics', passport.authenticate('jwt', {session: false}), function(req,res,next){
    let response = { task_count : 0 , milestone_count : 0, project_count : 0, user_count : 0};

    Tasks.count({}, (err, cb) => {
        response.task_count = cb;
        
        Milestones.count({}, (err, cb1) => {
            response.milestone_count = cb1;

            Project.count({}, (err, cb2) => {
                response.project_count = cb2;

                Users.count({}, (err, cb3) => {
                    response.user_count = cb3;
                                        
                    res.json(response);
                });
            })
        });

    });

});


router.get('/coredatausers', passport.authenticate('jwt', {session: false}), function(req,res,next){
    Users.find({}, (err, cb) => {
        res.json(cb);
    });
});


router.get('/coredataprojects', passport.authenticate('jwt', {session: false}), function(req,res,next){
    Project.find({}, (err, cb) => {
        res.json(cb);
    });
});


module.exports = router;