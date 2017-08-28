const { AkairoClient } = require('discord-akairo');
const config = require('./config.json');
 
const client = new AkairoClient({
    ownerID: config.ownerId,
    prefix: config.prefix,
    commandDirectory: './commands/',
    inhibitorDirectory: './inhibitors/',
    listenerDirectory: './listeners/'
});
 
client.login(config.botToken).then(() => {
    console.log('Beep boop!');
});