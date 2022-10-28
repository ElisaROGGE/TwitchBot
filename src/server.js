import dotenv from 'dotenv';
import tmi from 'tmi.js';

dotenv.config();

const {TWITCH_USERNAME, TWITCH_PASSWORD} = process.env;


const client = new tmi.Client({
    channels: ['pand0rine'],
    options: { debug : true },
    identity: {
        username: TWITCH_USERNAME,
        password: TWITCH_PASSWORD
    }
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if(message === "salut"){
        client.say(channel, `Salut @${tags.username} !`)
    }
    console.log(`${tags['display-name']}: ${message}`);
});