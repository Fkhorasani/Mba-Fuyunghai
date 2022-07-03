const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) =>{
    const url = "https://some-random-api.ml/animal/cat"
    const res = await fetch(url);
    const json = await res.json();

    let embed = new Discord.MessageEmbed()
    .setImage(json.image)
    .setDescription(json.fact)
    .setColor("RANDOM")
    .setFooter("Random Cat Fact and Random Cat Pic")
    .setTimestamp()
    
    // send embed
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "cat"