module.exports = {
	name: 'kick',
    description: 'Kick',
    guildOnly: true,
	execute(message, args) {
		// check if there are mentions in the message
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();
        
        // send the message
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};