const Discord = require("discord.js")
module.exports.run = (client, message, args) =>{
  const commands = client.commands.map(command => command.name).join("\n ")
  const size = client.commands.size + 2;
  const embed = new Discord.MessageEmbed()
  .setTitle(`Total commands: ${size}`)
  .addField("command",commands, true)
  .addField("command","gif\nsticker", true)
  .setFooter("My Prefix is + \nBot made by FuyumiHirai#3684")
  message.channel.send({embeds:[embed]})
}

module.exports.name = "help"