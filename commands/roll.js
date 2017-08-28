const { Command } = require('discord-akairo');

function exec(msg) {
    return msg.channel.send('Under construction! Please try again later.. ^^\'');
}

module.exports = new Command('roll', exec, {
    aliases: ['roll', 'dice', 'diceroll']
});