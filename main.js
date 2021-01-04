const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login('YOUR_TOKEN_HERE');

function status() {
    const mcIP = 'YOUR_SERVER_IP'; // Ex: hypixel.net
    var mcPort = YOUR_SERVER_PORT; // Ex: 25565
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
    fetch(url)
        .then(res => res.json())
        .then(json => {

            let players_status = client.channels.cache.get('ID_CHAT_VOICE');
            players_status.setName(`🎮 Players: ${json.players.now}`)
        })
}

client.on("ready", () => {
    console.log(`[BOT] - Bot is connected in ${client.user.tag}.`)
    setInterval(status, 120000); // Time to update! Ex: 60000 = 1 minute
})
