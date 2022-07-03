const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle("Selamat Pagi")
    .setDescription("Mmm yesss...")
    .setImage("https://tse2.mm.bing.net/th/id/OIP.nLJwcq8_BK4bJ8MWBrhi_wHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7")
    .setColor("GREEN")
    .setTimestamp()

     message.channel.send( {embeds : [ embed ] } )
}

module.exports.name = "pagi"