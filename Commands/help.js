const Discord = require("discord.js")
module.exports.run = (client, message, args) =>{
  const commands = client.commands.map(command => command.name).join("\n ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Total commands: ${client.commands.size}`)
  .setDescription(commands)
  .setFooter("My Prefix is +")
  message.channel.send({embeds:[embed]})
}

module.exports.name = "help"