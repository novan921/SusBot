const Discord = require('discord.js');

module.exports = {
	name: 'edit',
    description: 'Edit embeds',
	execute(message, args) {
        message.client.user.setPresence({
            status: "TEST STATUS",
            game: {
                name: "!help",
                type: "WATCHING"
            }
        });
	},
};