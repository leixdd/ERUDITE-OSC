const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
const config =  require('../config/database');

//User Schema
const CoreDataUsers = mongoose.Schema({


    loginDetails: {
        username: { type: String, required: true},
        password: { type: String, required: true },
        email: { type: String, required: true }
    },
    userDetails: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        middlename: { type: String, required: true},
        skills: { type: Array },
        projects: { type: mongoose.Schema.Types.ObjectId, ref: "coredataprojects"},
        picture : {type: String}
    },

    messages: [{
        from : {type: mongoose.Schema.Types.ObjectId, ref: 'coredatausers'},
        message: {type: String},
        date: {type: Date, default: Date.now()}
    }],

    followers: [{
        userID: {type: mongoose.Schema.Types.ObjectId}
    }],

    following: [{
        userID: {type: mongoose.Schema.Types.ObjectId}
    }],

    notifications: [{
        notif_message: {type: String},

        /*
            0 : Project Notifications,
            1 : Followers,
            2 : Invite to Project
        */
        notif_type: {type: Number},
        notif_date: {type: Date, default: Date.now()}
    }],

    joinDate : {type: Date, default: Date.now()}
});



const User = module.exports =  mongoose.model('coredatausers', CoreDataUsers);


module.exports.getUserByID = function(id, callback){
    User.findById(id, '_id', callback);
}

module.exports.getUser = function(id, callback){
    User.findById(id, callback);
}

module.exports.getAll = function(callback){
    User.find(callback);
}


module.exports.getUserByUsername = function(username, callback){
    const query = {'loginDetails.username': username}
    User.findOne(query, callback);
}

module.exports.AccountSettings = function(id, callback){
    User.findById(id, '-userDetails.projects -SA -joinDate -_id -__v -loginDetails.password -loginDetails.username -following -notifications -followers -messages', callback)
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.loginDetails.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.loginDetails.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.updateUser = function(id, user, callback){
    User.findByIdAndUpdate(id, {"userDetails" : user.userDetails, $set : {"loginDetails.email" : user.loginDetails.email}}, callback);
}

module.exports.comparePasswords = function(enteredPass, UserPass, callback){
    bcrypt.compare(enteredPass, UserPass, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}




//Messages


//Follow
