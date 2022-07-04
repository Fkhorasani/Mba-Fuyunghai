const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    
    const url = "http://api.adviceslip.com/advice"
    const res = await fetch(url);
    const json = await res.json();

    let embed = new Discord.MessageEmbed()
    .setTitle(message.author.username + `'s advice`)
    .setDescription(json.slip.advice)
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    // send embed
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "advice"