const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    const url = "https://some-random-api.ml/meme"
    const res = await fetch(url);
    const json = await res.json();

    let embed = new Discord.MessageEmbed()
    .setImage(json.image)
    .setDescription(json.caption)
    .setColor("RANDOM")
    .setTimestamp()
    
    // send embed
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "meme"