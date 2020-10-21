var twitter = require('../tracks/twitter.js');
const config = require('../config.json');
var idIntervalTwitter;

module.exports = {
    name: 'track',
    description: 'track youtube uploads',
    execute(client, message, args) {
        if (!args.length) return message.channel.send(`You didn't pass any arguments, ${message.author}!`);
        // if(args[0] === 'youtube') {
        //     if(args[1] === 'start') {
        //         message.channel.send("Tracking "+config.youtubers.length+" channels has been started...");
        //         check(client);
        //         idIntervalYoutube = setInterval(() => {
        //             check(client);
        //         }, 20 * 1000);
        //     } else if(args[1] === 'stop') {
        //         if(idIntervalYoutube != null) {
        //             message.channel.send("Tracking stopped...");
        //             clearInterval(idIntervalYoutube);
        //             idIntervalYoutube = null;
        //         }
        //     }
        // } else if(args[0] === 'twitter') {

        // }
        message.channel.send("Tracking @" + config.twitterUsers[0] + " has been started...");
        if (args[0] === 'start') {
            twitter.track();
            idIntervalTwitter = setInterval(() => {
                twitter.track();
            }, 1 * 1000);
        } else if(args[0] === 'stop') {
            if(idIntervalTwitter != null) {
                message.channel.send("Tracking stopped...");
                clearInterval(idIntervalTwitter);
                idIntervalTwitter = null;
            }
        }
    },
};