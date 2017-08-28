const { Command } = require('discord-akairo');

function exec(msg) {
    return msg.channel.send('Under construction! Please try again later.. ^^\'');
}

module.exports = new Command('flip', exec, {
    aliases: ['flip', 'coin', 'coinflip']
});