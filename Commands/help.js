const Discord = require("discord.js")
module.exports.run = (client, message, args) =>{
  const commands = client.commands.map(command => command.name).join("\n ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Total commands: ${client.commands.size}`)
  .addField("command",commands, true)
  .addField("command","gif\nsticker", true)
  .setFooter("My Prefix is + \nBot made by FuyumiHirai#3684")
  message.channel.send({embeds:[embed]})
}

module.exports.name = "help"