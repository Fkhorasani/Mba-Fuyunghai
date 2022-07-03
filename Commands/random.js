const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
      const seed = Math.floor(Math.random() * 1000);
    // const h = Math.floor(Math.random() * 400) + 100;
    // const w = Math.floor(Math.random() * 400) + 100;
    
    // create embed with random image
    let embed = new Discord.MessageEmbed()
    .setImage(`https://picsum.photos/id/${seed}/500/300`)
    .setColor("RANDOM")
    .setTimestamp()
    
    // send embed
    message.channel.send({ embeds: [embed] });
}

module.exports.name = "random"