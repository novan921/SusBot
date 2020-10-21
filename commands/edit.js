const Discord = require('discord.js');

module.exports = {
	name: 'edit',
    description: 'Edit embeds',
	execute(client, message, args) {
        const receivedEmbed = message.embeds[0];
        const exampleEmbed = new Discord.MessageEmbed(receivedEmbed).setTitle('New title');

        message.channel.send(exampleEmbed);
	},
};