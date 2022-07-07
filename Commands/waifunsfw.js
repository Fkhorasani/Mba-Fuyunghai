const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    const url = "https://api.waifu.pics/nsfw/waifu"
    const res = await fetch(url);
    const json = await res.json();

    message.channel.send(`Here you go --> ${json.url}`);
}

module.exports.name = "waifunsfw"