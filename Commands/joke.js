const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    const url = "https://some-random-api.ml/joke"
    const res = await fetch(url);
    const json = await res.json();

    let embed = new Discord.MessageEmbed()
    .setDescription(json.joke)
    .setColor("RANDOM")
    .setTimestamp()
  
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "joke"