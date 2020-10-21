const request = require('request');
var fs = require('fs');
// request('https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg/live', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     // console.log('body:', body); // Print the HTML for the Google homepage.
//     // fs.writeFile('test.html', body, (err) => {
//     //     if(err) throw err;
//     //     console.log('saved');
//     // });
// });

module.exports = {
    name: 'yt',
    description: 'test yt',
    execute(client, message, args) {
        if (!args.length) return message.channel.send(`You didn't pass any arguments, ${message.author}!`);
        if(args[0] === 'start') {
            message.channel.send("Tracking "+config.youtubers.length+" channels has been started...");
            
            idIntervalYoutube = setInterval(() => {
                // code
            }, 20 * 1000);
        } else if(args[0] === 'stop') {
            if(idIntervalYoutube != null) {
                message.channel.send("Tracking stopped...");
                clearInterval(idIntervalYoutube);
                idIntervalYoutube = null;
            }
        }
        

    },
};