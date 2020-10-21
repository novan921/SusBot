const request = require('request');
var fs = require('fs');
request('https://www.youtube.com/channel/UC_a1ZYZ8ZTXpjg9xUY9sj8w/live', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile('test.html', body, (err) => {
        if(err) throw err;
        console.log('saved');
    });
});