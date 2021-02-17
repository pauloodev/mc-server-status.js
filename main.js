const Discord = require('discord.js'); // Important to install "npm i discord.js"
const fetch = require('node-fetch'); // Important to install "npm i node-fetch"
const client = new Discord.Client(); // Bring the Discord.Client function to a variable "client"
client.login('YOUR_TOKEN_HERE'); // Your bot's Token HERE!

function status() { // Minecraft Server Status System
    const mcIP = 'YOUR_SERVER_IP'; // Ex: hypixel.net
    var mcPort = YOUR_SERVER_PORT; // Ex: 25565
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort; // API (Here he will search the api)
    fetch(url)
        .then(res => res.json())
        .then(json => {
            let players_status = client.channels.cache.get('ID_CHAT_VOICE'); // IMPORTANT: Place the Voice Chat ID here where the member counter will be located
            players_status.setName(`🎮 Players: ${json.players.now}`) // IMPORTANT: You can modify the message, but leave the variable "${json.players.now}" (is where the value sought in the api will appear)
        })
}

client.on("ready", () => { // Bot Ready
    console.log(`[BOT] - Bot is connected in ${client.user.tag}.`) // When the bot connects it will return this message on the console
    setInterval(status, 120000); // Time to update! Ex: 60000 = 1 minute
})
