const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    let random = (Math.floor(Math.random() * Math.floor(2)));

    if(random === 0) {
      message.channel.send('I flipped heads!');
    }
    else {
      message.channel.send('I flipped tails!');
    }
}

module.exports.name = "coinflip"