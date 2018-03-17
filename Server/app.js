const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //parsing incoming request
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connecting to mongo db
mongoose.connect(config.database, {useMongoClient: true});

//connected to the database
mongoose.connection.on('connected', () => {
    console.log("Connected to the Database : " + config.database);
})

mongoose.connection.on('error', (err) => {
    console.log(err);
});


const app = express();



//PORT
const port = process.env.PORT || 3000;

// Cross Origin Resource Sharing Middleware
app.use(cors());

//set Static Folder (Public)

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware

app.use(bodyParser.json());


//routes

const users = require('./routes/users');
const projects = require('./routes/projects');
const admin = require('./routes/admin');


app.use('/users', users);
app.use('/projects', projects);
app.use('/admin', admin);

//Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);



app.get('/', (req, res) => {
    res.send('Wrong Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});






//socket.io

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {

    socket.on('enterProject', (proj_id, user) => {
        socket.room  = proj_id;
        socket.username = user;
        socket.join(proj_id);
        socket.emit('enteredCB', "You've successfully entered to " + proj_id);
        socket.broadcast.to(proj_id).emit('enteredCB', user + ' was connected to this room');
    });

    socket.on('sendGroupMessage', (proj_id, message) => {
        io.in(proj_id).emit('groupMessage', message);
    });


    socket.on("message", (data) => {
        console.log(data);
        io.emit('message', {msg : data});    
    });

    //private Chatting test

    // socket.on('chat.private.start', (user1, user2, channelID) => {
    //     if(!channelID){
    //         //if no channel ID .. then insert
    //     }
    // });
});


//STARTING SERVER
server.listen(port, () => {
    console.log("Server is Starting at Port " + port);
})
