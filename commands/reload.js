module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    execute(client, message, args) {
        if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        console.log('Reloading '+ commandName + '.js ...');
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            console.log('There is no such command with name or alias \''+commandName+'\'');
            return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
        } 

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
            console.log('Command '+commandName+' was reloaded!');
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }

    },
};