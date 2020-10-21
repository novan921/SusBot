module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(client, message, args) {
        if (!message.mentions.users.size) {
            message.channel.send(`Your avatar: `);
            message.channel.send(
                `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`,
            );
            return;
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({ format: "png", dynamic: true })}`;
        });

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`

        message.channel.send(avatarList);

    },
};