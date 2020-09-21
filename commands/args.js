module.exports = {
    name: 'args',
    description: 'Arguments',
    args: true,
    execute(message, args) {
        
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        // message.channel.send(`First argument: ${args[0]}`);
        message.channel.send(
            `Your arguments: ${args}\n`
            +`Arguments length: ${args.length}`
        );
    },
};