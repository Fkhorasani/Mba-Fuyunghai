const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    const url = "https://some-random-api.ml/animu/hug"
    const res = await fetch(url);
    const json = await res.json();
     
    message.channel.send(json.link);
}

module.exports.name = "hug"