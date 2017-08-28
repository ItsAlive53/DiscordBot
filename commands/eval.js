const { Command } = require('discord-akairo');

function exec(msg, args) {
	try {
		return msg.channel.send(eval(args.items));
	} catch (ex) {
		console.log(ex);
		return msg.channel.send('Error with commands, answer possibly too long.');
	}
}

module.exports = new Command('eval', exec, {
    aliases: ['eval'],
    ownerOnly: true,
    args: [
        {
            id: 'items',
            match: 'content'
        }
    ]
});