const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    let random = (Math.floor(Math.random() * Math.floor(6)));
    if(random === 1) {
      message.channel.send('You rolled 1! ⚀');
    }
    else if(random === 2){
      message.channel.send('You rolled 2! ⚁');
    }else if(random === 3){
      message.channel.send('You rolled 3! ⚂');
    }else if(random === 4){
      message.channel.send('You rolled 4! ⚃');
    }else if(random === 5){
      message.channel.send('You rolled 5! ⚄');
    }else if(random === 6){
      message.channel.send('You rolled 6! ⚅');
    }
}

module.exports.name = "dice"