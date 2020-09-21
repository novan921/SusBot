const Discord = require('discord.js');

module.exports = {
	name: 'play',
    description: 'test play',
	execute(message, args) {
        message.channel.send(message.author);
        // message.client.user.setPresence({
        //     status: "TEST STATUS",
        //     game: {
        //         name: "!help",
        //         type: "WATCHING"
        //     }
        // });
	},
};