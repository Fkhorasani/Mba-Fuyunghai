const Discord = require("discord.js");
const phin = require('phin')
let fs = require('fs')

module.exports.run = async (client, message, args) =>{
    const url = `https://some-random-api.ml/canvas/invert?avatar=${message.author.displayAvatarURL({format:`png`})}`

    let embed = new Discord.MessageEmbed()
    .setImage(url)
    .setColor("RANDOM")
    .setTimestamp()
    // send embed
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "invert"