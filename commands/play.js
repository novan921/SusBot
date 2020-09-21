
// 358165427404275712
module.exports = {
    name: 'play',
    description: 'test play',
    execute(message, args) {
        // rp.updatePresence({
        //     state: 'slithering',
        //     details: '🐍',
        //     startTimestamp: Date.now(),
        //     endTimestamp: Date.now() + 1337,
        //     largeImageKey: 'korone1',
        //     smallImageKey: 'korone1',
        //     instance: true,
        // });
        // message.client.user.setPresence({ 
        //     activity: { 
        //         name: 'with discord.js',
        //         type: 'WATCHING'
        //     }, 
        //     status: 'idle' 
        // });
        message.channel.send("ashiap");
    },
};