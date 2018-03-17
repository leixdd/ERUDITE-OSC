const config = require('./app-config');

module.exports = {
    database: 'mongodb://' + config.ip + ':' + config.port +'/erudite',
    secretToken : 'secret'
}