const cheerio = require('cheerio');
const config = require('../config.json');
const E = require('events');
const request = require('request');
const separateReqPool = { maxSockets: 15 };
const async = require('async');
const _ = require('lodash');
let tweets = {}, apiurls = [], N = [];


///////////////////////////  CONFIGURE TWITTER HANDLERS /////////////////////////////////////////////////////
var THandlers = [
    {
        name: 'Watson Amelia',
        url: "https://twitter.com/AchmadSetyabudi",
        webhook: "https://discordapp.com/api/webhooks/728746704895213628/QJcnGMUAl0kMY8_gEuFmv2QnyRxfv6cu6cQUsFEk5UAjGyn3tGbrHnJTy08a1feFdILX",
        avatar_url: "https://pbs.twimg.com/profile_images/1303521201331998720/IT-LaNr3_400x400.jpg",
        keywords: "#test",
    }
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ADD TWEETS
THandlers.forEach((th, i) => {
    tweets[th.url] = [];
    apiurls.push(th.url);
});

//DISCORD WEBHOOK
const sendDiscordMessage = (pl) => {
    const { content, turl } = pl;
    const { name, webhook, avatar_url } = THandlers.filter((d, i) => d.url === turl)[0];
    request.post(webhook).form({ username: name, avatar_url: avatar_url, content: content });
}

console.log('Twitter => Discord program is running');

const headers = { 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36' }

//MONITOR


module.exports = {
    track: function track() {
        async.map(apiurls, function (item, callback) {
            request({ url: item, headers, pool: separateReqPool }, function (error, response, body) {
                try {
                    const $ = cheerio.load(body);
                    var turl = "https://twitter.com" + response.req.path;
                    const th_name = THandlers.filter((d, i) => d.url === turl)[0].name;
                    if (!tweets[turl].length) {
                        //FIRST LOAD
                        (() => {
                            const turls = $('table.tweet').toArray().map(d => d["attribs"]["href"]);
                            const tweethtml = $('div.tweet-text').toArray().map(d => $(d).html());
                            tweets[turl] = turls.map((d, i) => { return { url: turls[i], text: tweethtml[i] } });
                        })()
                    }
                    else {
                        (() => {
                            //EVERY OTHER TIME
                            const turls = $('table.tweet').toArray().map(d => d["attribs"]["href"]);
                            const tweethtml = $('div.tweet-text').toArray().map(d => $(d).html());
    
                            const newTweets = turls.map((d, i) => { return { url: turls[i], text: tweethtml[i] } });
    
                            const oldturls = tweets[turl].map(d => d.url);
                            const slicelen = turls.map(d => { return oldturls.indexOf(d); }).indexOf(0);
    
                            const ntweets = slicelen === -1 ? [] : newTweets.slice(0, slicelen);
    
                            ntweets.filter(d => {
                                const th_kw = THandlers.filter((d, i) => d.url === turl)[0].keywords.split(',');
                                if (th_kw.includes('*')) {
                                    return true;
                                } else {
                                    const checkTexts = th_kw.map(kw => d.text.includes(kw) ? true : false);
                                    return checkTexts.includes(false) ? false : true;
                                }
                            }).forEach(t => {
                                const { url: content } = t;
                                sendDiscordMessage({ content: `https://twitter.com${content}`, turl });
                            });
                            tweets[turl] = newTweets;
                        })()
                    }
    
                } catch (e) {
                    console.log('Error =>' + e);
                }
            });
        }, function (err, results) {
            //console.log(results);
        });
    }
}