const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/users');
const multer = require('multer');
const Tasks = require('../models/tasks');

let CurrentUser = "";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/assets/uploads/avatars');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});


function setCurUser(Sx){
    CurrentUser = Sx;
}

function getCurUser(){
    return CurrentUser;
}
const AvatarUpload =  multer({storage : storage}).single('profile');

router.post('/uploadPhoto', (req, res, next) => {

    AvatarUpload(req, res, function(err){
        if(err){
            console.log(err);
        }

        res.json({
            success: true,
            msg: req.body
        });
    });
    
});

router.post('/userTask',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let data = req.body;
    Tasks.getTasksByCurrentUser(data.id, (err, cb) => {
        res.json({result : cb});
    });
});
//Registration

router.post('/register',  multer({storage: storage}).single('profile'), (req, res, next) => {
    
    //upload Picture

    let newUser = new User({
        
        loginDetails: {
            username: req.body.username, 
            password: req.body.password,
            email: req.body.email,
        },
        userDetails: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            middlename: req.body.middlename,
            gender: req.body.gender,
            skills: req.body.skills,
            projects: req.body.projects
        }
        
        
    });
    

    const UExist = false;
    User.getUserByUsername(req.body.username, (err, user) => {

        if (err) throw err;

        if(!user){
            this.UExist = false;   
        }else{
            this.UExist = true;    
        }


    });

    if(!this.UExist){

        User.addUser(newUser, (err, user) => {
            if(err){
                res.json({success: false, msg: 'Failed to Register User'});
            } else {          
                var f = req.file;
                User.findByIdAndUpdate(user.id, {$set : {"userDetails.picture" : f.filename }}, function(err, cb){
                    res.json({success: true, msg: 'Successfully registered'});
                });
            }
        });


    }else{
        res.json({success: false, msg: 'Failed: Username Exist'});    
    }
});


//Authentication

router.post('/auth', (req, res, next) => {
   const username = req.body.username;
   const password = req.body.password;

   User.getUserByUsername(username, (err, user) => {
       if(err) throw err;

       if(!user){
           return res.json({success: false, msg: 'User Not Found', error: "ue0"});

       }

       User.comparePasswords(password, user.loginDetails.password, (err, isMatch) => {
        if(err) throw err;

        let userPayload = {
            _id : user._id
        };

        if(isMatch){
            const token = jwt.sign(userPayload, config.secretToken,  {
                expiresIn: 604800
            });

            res.json({
                success: true,
                token: 'Bearer ' + token,

                //return data
                user: {
                    id: user._id,
                    username: user.loginDetails.username,
                    picture : user.userDetails.picture
               }

            });
        }else{
            return res.json({success: false, msg: "Wrong Password", error: "ue1"});
        }
       });
   });
});



//Checking Username Existence 

router.post('/UsernameExist', (req, res, next) => {
    
    const username = req.body.username;
    User.getUserByUsername(username, (err, user) => {

        if (err) throw err;

        if(!user){
            return res.json({success: true, msg : "username not found"});
        }else{
            return res.json({success: false, msg : "username found"});
        }


    });
});

//Profile

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.getUser(req.user._id, (err, user) => {
        if (err) throw err;
        res.json({user: user});
    });
});

router.post('/getUser', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.getUser(req.body.id, (err, user) => {
        if (err) throw err;

        res.json({user: user});
    })
});

router.get('/accSettings', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.AccountSettings(req.user._id, (err, user) => {
        if (err) throw err;

        res.json({user: user});
    });
});

router.post('/updateUser', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const user = req.body;
    User.updateUser(req.user._id, user, (err, user) => {
        if (err) throw err;

        res.json({success: true, msg: "Successfully Updated"});
    });
});

module.exports = router;