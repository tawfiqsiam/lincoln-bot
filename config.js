require('dotenv-flow').config();

module.exports = {
    owner:''263639609416613888''
    prefix:''.''
    mongoURI:''cluster0-shard-00-00-89nkx.mongodb.net:27017'',
    defaultSettings: {
        prefix: process.env.PREFIX,
        welcomeChannel: 'welcome',
        welcomeMsg: 'Welcome {{user}} to {{guild}}!',
        modRole: 'Moderator',
        adminRole: 'Administrator'
    }
};
