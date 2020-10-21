module.exports = {
	name: 'embed',
    description: 'Embed',
	execute(client, message, args) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Some title',
            url: 'https://discord.js.org',
            author: {
                name: 'Some name',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
                url: 'https://discord.js.org',
            },
            description: 'Some description here',
            thumbnail: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [
                {
                    name: 'Regular field title',
                    value: 'Some value here',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: 'Inline field title 1',
                    value: 'Some value here 1',
                    inline: true,
                },
                {
                    name: 'Inline field title 2',
                    value: 'Some value here 2',
                    inline: true,
                },
                {
                    name: 'Inline field title 3',
                    value: 'Some value here 3',
                    inline: true,
                },
            ],
            image: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            timestamp: new Date(),
            footer: {
                text: 'Some footer text here',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };
        
        message.channel.send({ embed: exampleEmbed });
	},
};