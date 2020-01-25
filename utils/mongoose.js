const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            autoIndex: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };
        
        mongoose.connect('cluster0-shard-00-00-89nkx.mongodb.net:27017', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;
        
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection successfully opened!');
        });
        
        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n ${err.stack}`);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });
    }
};
