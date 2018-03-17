const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Project = require('../models/projects');
const Milestones = require('../models/milestones');
const Tasks = require('../models/tasks');
const passport = require('passport');
const Users = require('../models/users');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/assets/uploads/files');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});


//#region Start Collaboration Module 

router.post('/newproject', passport.authenticate('jwt', {session: false}), function(req,res,next){
    let data = new Project(req.body);

    Project.newProject(data, (err, user) => {
        if (err) throw err;
        
        Project.addUserToProject(user.owner, user.id, 0, (err, admem) => {
          //
        });

        
        res.json({success: true, msg: "New Project Added"});
    });




});

router.post('/getprojectsAllPublic', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Project.getProjectsAllPublic((err, projects) => {
    res.json({projects: projects});
  })
});

router.get('/getprojects', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Project.getProjects((err, projects) => {
    res.json({projects: projects});
  })
});

router.post('/getproject', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Project.getProject(data.owner_id, (err, project) => {
    res.json({projects: project});
  });

});

router.post('/getprojectByID', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Project.getProjectByID(data.prjm_id, (err, project) => {
    res.json({projects: project});
  });
});


//#endregion


//#region Milestones 

router.post('/addMilestone', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;

  Milestones.addMilestone(data.prjm_id, new Milestones(data.milestones), (err, user) => {
    if (err) throw err;

    res.json({success: true, msg: "New milestone is added to project : " + data.prjm_id});
  });

});

router.post('/getMilestones', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Milestones.getMilestones(data.id, (err, milestones) => {
    res.json({milestones: milestones});
  });
});

router.post('/getMilestone', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Milestones.getMilestone(data.id, (err, milestone) => {
    res.json({milestone: milestone});
  });
});

router.post('/updateMile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Milestones.updateTaskProgress(data.id, data.stat, (err, mile) => {
    res.json({success: true, msg: "Milestone " + data.id + " is updated"});
  })
});

router.post('/deleteMile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  var data = req.body;
  Milestones.deleteMileStone(data.id, (err, mile) => {
    Tasks.deleteMany({}, (err, cb) => {
      res.json({success: true, msg: "Milestone " + data.id + " was deleted"});
    });
  });  
});


//#endregion end Milestones


//#region Tasks

router.post('/getTasks', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Tasks.getTasks(data.mile_id, (err, tasks) => {
    if (err) throw err;
    res.json({tasks: tasks});
  })
});

router.post('/addTask', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Tasks.addTask(data.mile_id, new Tasks(data.tasks), function(err, projects) {
    if (err) throw err;

    res.json({success: true, msg: "New Task is added to Milestone : " + data.mile_id});
  });
});


router.post('/updateProgress', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = req.body;
  Tasks.updateProgress(data.id, data.status, function(err, prog){
    res.json({success: true, msg: "Task " + data.id + " is updated"});
  });
});

router.post('/complyTask', multer({storage: storage}).single('task_file_attachment'), passport.authenticate('jwt', {session: false}), (req, res, next) => {
  var f = req.file.filename;
  var data = {
    task_file_attachment : f,
    task_submit_comment : req.body.task_submit_comment,
  };

  Tasks.complyTask(req.body.id, data, function(err, cb){
    res.json({success: true, msg: "Task was submitted to the owner"});
  });

});

router.post('/downloadAttachment', passport.authenticate('jwt', {session: false}), function(req, res, next){
  var f = './public/assets/uploads/files/' + req.body.downloadfile;
  res.download(f);
});

router.post('/updateSubmission', passport.authenticate('jwt', {session: false}), function(req, res, next){
  var data = req.body;
  Tasks.updateSubmission(data.id, data.status, function(err, cb){
    res.json({success: true, msg: "Task " + data.id + " is updated"});
  });
});


//#endregion


//#region Project Team 

  router.post('/addMember', passport.authenticate('jwt', {session: false}), function(req, res, next){
    var data = req.body;

    Users.getUserByUsername(data.uid, function(err, user) {

        if (err) throw err;
        
        if(!user){
        
          //error handling

          res.json({success: false, msg : "Sorry, this user is not exisitng"});


        }else{
          //user.id 
          Project.getAllMembers(data.id, function(err, mems){
            
            var exist = false;
            for(var i = 0; i < mems.members.length; i++){
              if(mems.members[i].user.id == user.id){
                exist = true;
              }
            }
            
            if(exist){
              res.json({success : false, msg: "This user is already existing in the team"});
            }else{
              Project.addUserToProject(user.id, data.id, 2, function(err, admem) {
                res.json({success: true, msg: "New Member was added"});
              });
            }

          });
        }


    });

  });

  router.post('/kickMember',  passport.authenticate('jwt', {session: false}), function(req, res, next){
    var data = req.body;
    Project.findById(data.id, function(err, cb){
      for(var i = 0 ; i < cb.members.length; i++){
        if(cb.members[i].user == data.uid){
          cb.members.splice(i, 1);
        }
      }

      
      Project.findByIdAndUpdate(data.id, {$set: {"members" : cb.members}}, function(err, call){
        res.json({success: true, msg: "This user is kicked from the project team"});
      });
    });
  });

  router.post('/getAllMembers', passport.authenticate('jwt', {session: false}), function(req, res, next){
    var data = req.body;
    Project.getAllMembers(data.id, function(err, mems){
      res.json({success: true, result: mems});
    });
  });

//#endregion

module.exports = router;
