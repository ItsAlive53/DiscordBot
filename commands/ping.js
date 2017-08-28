const { Command } = require('discord-akairo');

function exec(msg) {
	console.log('Pinged by ' + msg.author.username);
    return msg.channel.send('Pong! ' + (Date.now() - msg.createdAt.getTime()) + "ms");
}

module.exports = new Command('ping', exec, {
    aliases: ['ping']
});