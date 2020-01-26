require('dotenv-flow').config();

module.exports = {
    owner: 263639609416613888
    prefix: .
    mongoURI: process.env.MONGO_URI,
    defaultSettings: {
        prefix: process.env.PREFIX,
        welcomeChannel: 'welcome',
        welcomeMsg: 'Welcome {{user}} to {{guild}}!',
        modRole: 'Moderator',
        adminRole: 'Administrator'
    }
};
