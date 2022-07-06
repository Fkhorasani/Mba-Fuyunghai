const express = require("express");
const app = express();

const fetch = require("node-fetch");
const snekfetch = require("snekfetch");

const nekoclient = require('nekos.life');
const neko = new nekoclient();

const request = require('superagent');
const fs = require("fs");

const prefix = "+";
const Discord = require("discord.js");

// const {REST} = require("@discordjs/rest");
// const {Routes} = require("@discord-api-types/v9");
// const {Player} = require("discord-player");

// const LOAD_SLASH = process.argv[2] == "load"

const CLIENT_ID = "882465267760914482" //bot
const GUILD_ID = "318680442721140736" //server



app.listen(3000,() =>{
  console.log("Project is running!")
})

app.get("/", (req,res)=>{
  res.send("Hello World!");
})


const client = new Discord.Client(
  {
    intents:["GUILDS", "GUILD_MESSAGES","GUILD_VOICE_STATES"],
    allowedMentions:["users"]
  });

//slash command

// client.slashcommands = new Discord.Collection()
// client.player = new Player(client, {
//   ytdlOptions:{
//     quality: "highestaudio"
//     highWaterMark: 1<<25
//   }
// })

// let command = []

// const slashFiles = fs.readdirSync("./slash").filter(file => file.endsWith(".js"));

// for(const file of slashFiles){
//   const slashcmd =  require(`./slash/${file}`)
//   client.slashcommands.set(slashcmd.data.name, slashcmd)
//   if(LOAD_SLASH) command.push(slashcmd.data.toJSON())
// }

// if(LOAD_SLASH){
//   const rest = new REST({version:"9"}).setToken(process.env.token)
//   const.log("Deploying slash commands")
//   rest.put(Routes.applicationGuildCommands(CLIENT_ID,GUILD_ID),{body: command})
//   .then(()=>{
//     consol.loh("Successfully laods")
//     process.exit(0)
//   })
//   .catch((err)=>{
//     if(err){
//       console.log(err)
//       process.exit(1)
//     }
//   })
// } else{
//   client.on("ready", ()=>{
//     console.log(`Logged in as ${client.user.tag}`)
//   })
//   client.on("interactionCreate",(interaction)=>{
//     async function handleCommand(){
//       if(!interaction.isCommand()) return

//       const slashcmd = client.slashcommands.get(interaction.commandName)
//       if (!slashcmd) interaction.reply("not a valid slash command")

//       await interaction.deferReply()
//       await slashcmd.run({client, interaction})
//     }
//     handleCommand()
//   })
//   client.login(process.env.token)
// }

client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName,command);
}

client.once('ready', () => {
    client.user.setActivity('YT:Fuyumi Hirai',{type: 'STREAMING', url:'https://www.twitch.tv/fuyumihirai'});
});

client.on("messageCreate", async (message) =>{
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ + /g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    
    let splitMessage = message.content.split(" ");
    if (splitMessage[0].toLowerCase() === "+gif") {
        // const gifSearchText = splitMessage.slice(0, splitMessage.length).join(" ");
    
        // const url = `http://api.giphy.com/v1/gifs/search?q=${gifSearchText}
        // &api_key=${process.env.giphy}&limit=20`;
    
        // const res = await fetch(url2);
    
        // const json = await res.json();
        
        // const randomIndex = Math.floor(Math.random() * json.data.length);
    
        // message.channel.send(json.data[randomIndex].url);

      const keywords = splitMessage.slice(1, splitMessage.length).join(' ');
      const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.tenor}`;

        const response = await fetch(url);
        const result = await response.json();

        const index = Math.floor(Math.random() * result.results.length);

        const embed = new Discord.MessageEmbed();
        embed.setTitle("GIF of " + keywords);
        embed.setDescription(result.results[index].url);
        message.channel.send({embeds: [embed]});
        message.channel.send(result.results[index].url);

      
    }
    else if (splitMessage[0].toLowerCase() === "+sticker") {
    const stickerSearchText = splitMessage.slice(0, splitMessage.length).join(" ");

    const url = `http://api.giphy.com/v1/stickers/search?q=${stickerSearchText}
    &api_key=${process.env.giphy}&limit=150`;

    const res = await fetch(url);

    const json = await res.json();
    
    const randomIndex = Math.floor(Math.random() * json.data.length);

    message.channel.send(json.data[randomIndex].url);
  }
    else if(!command) return
    else command.run(client, message, args)
  }


  
//   let splitMessage = message.content.split(" ");
//   if(message.content.toLowerCase() === "ping"){
//     message.channel.send("Pong!")
//   }

//   if (message.content.toLowerCase() === '+ping') {  
//     message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
//   }
  
//   if(message.content.toLowerCase() === "ding"){
//     message.channel.send("Dong!")
//   }
  
//   if(message.content.toLowerCase() === "embed"){
//     let embed = new Discord.MessageEmbed()
//     .setTitle("Ini Title")
//     // .setAuthor("Fuyumi Hirai", "https://media.discordapp.net/attachments/847434926877048852/992341961161834496/Tak_berjudul162_20210906094655_2.png?width=640&height=640")
//     .setAuthor(message.author.username, message.author.displayAvatarURL())
//     .setURL("https://www.youtube.com/channel/UCxmXdIR2O5YoxmiyzQNeFnQ") //biar title clickable
//     .setDescription("Ini Deskripsiiiiiiiiiiiiiiiiiiiiii AAAAAaaaaaaaaaaaaaaaaaaaaaa")
//     .setFooter("ini Kakiiiii",message.author.displayAvatarURL())
//     .setColor("RANDOM") //warna border
//     .addField("Field Name", "Field value",true) //true biar sebelahan
//     .addField("Field Name2", "Field value2",true)
//     .addField("Field Name3", "Field value3")
//     .setThumbnail(message.author.displayAvatarURL()) //image samping title
//       .setImage("https://media.discordapp.net/attachments/847434926877048852/992341961161834496/Tak_berjudul162_20210906094655_2.png?width=640&height=640") //image bawah
//     .setTimestamp()
// // .setTimestamp(new Date("1 July 2022")) //custom date

//   let embed2 = new Discord.MessageEmbed()
//   .setTitle("Another embed")
//   .setDescription("iofhasiohdiajsfsddfs")
//   .setFooter("fijasiofjojbjdasd")

//   let embed3 = new Discord.MessageEmbed()
//   .setTitle("Another embedsss")
//   .setDescription("iofhasiohdiajsfsddfs")
//   .setFooter("fijasiofjojbjdasd")   
//   .setColor("PURPLE")
  
//   message.channel.send( {embeds : [ embed,embed2,embed3 ] ,content:"sebelom embed //pilihan"} )
//   }

//   if(message.content.toLowerCase() === "pagi"){
//     let embed = new Discord.MessageEmbed()
//     .setTitle("Selamat Pagi")
//     .setDescription("Mmm yesss...")
//     .setImage("https://tse2.mm.bing.net/th/id/OIP.nLJwcq8_BK4bJ8MWBrhi_wHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7")
//     .setColor("GREEN")
//     .setTimestamp()

//      message.channel.send( {embeds : [ embed ] } )
//   }

//   if (message.content.toLowerCase() === '+random' || message.content.toLowerCase() === '+rand') {
//     const seed = Math.floor(Math.random() * 1000);
//     // const h = Math.floor(Math.random() * 400) + 100;
//     // const w = Math.floor(Math.random() * 400) + 100;
    
//     // create embed with random image
//     let embed = new Discord.MessageEmbed()
//     .setImage(`https://picsum.photos/id/${seed}/500/300`)
//     .setColor("RANDOM")
//     .setTimestamp()
    
//     // send embed
//     message.channel.send({ embeds: [embed] });
// }

//   //giphy
  

//   if (splitMessage[0].toLowerCase() === "+gif") {
//     const gifSearchText = splitMessage.slice(0, splitMessage.length).join(" ");

//     const url = `http://api.giphy.com/v1/gifs/search?q=${gifSearchText}
//     &api_key=${process.env.giphy}&limit=150`;

//     const res = await fetch(url);

//     const json = await res.json();
    
//     const randomIndex = Math.floor(Math.random() * json.data.length);

//     message.channel.send(json.data[randomIndex].url);
//   }

//   if (splitMessage[0].toLowerCase() === "+sticker") {
//     const stickerSearchText = splitMessage.slice(0, splitMessage.length).join(" ");

//     const url = `http://api.giphy.com/v1/stickers/search?q=${stickerSearchText}
//     &api_key=${process.env.giphy}&limit=150`;

//     const res = await fetch(url);

//     const json = await res.json();
    
//     const randomIndex = Math.floor(Math.random() * json.data.length);

//     message.channel.send(json.data[randomIndex].url);
//   }

//    if (message.content.toLowerCase() === "+cat") {
//     const url = "https://some-random-api.ml/animal/cat"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Cat Fact and Random Cat Pic")
//     .setTimestamp()
    
//     // send embed
//     message.channel.send({ embeds: [embed] });
     
//   }

//   if (message.content.toLowerCase() === "+dog") {
//     const url = "https://some-random-api.ml/animal/dog"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Dog Fact and Random Dog Pic")
//     .setTimestamp()
    
//     // send embed
//     message.channel.send({ embeds: [embed] });
//   }

//   if (message.content.toLowerCase() === "+panda") {
//     const url = "https://some-random-api.ml/animal/panda"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Panda Fact and Random Panda Pic")
//     .setTimestamp()
//     // send embed
//     message.channel.send({ embeds: [embed] });
//   }


//   if (message.content.toLowerCase() === "+fox") {
//     const url = "https://some-random-api.ml/animal/fox"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Fox Fact and Random Fox Pic")
//     .setTimestamp()
//     // send embed
//     message.channel.send({ embeds: [embed] });
//   }
  
//   if (message.content.toLowerCase() === "+redpanda") {
//     const url = "https://some-random-api.ml/animal/red_panda"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Red Panda Fact and Random Red Panda Pic")
//     .setTimestamp()
//     // send embed
//     message.channel.send({ embeds: [embed] });
//   }

//   if (message.content.toLowerCase() === "+koala") {
//     const url = "https://some-random-api.ml/animal/koala"
//     const res = await fetch(url);
//     const json = await res.json();

//     let embed = new Discord.MessageEmbed()
//     .setImage(json.image)
//     .setDescription(json.fact)
//     .setColor("RANDOM")
//     .setFooter("Random Koala Fact and Random Koala Pic")
//     .setTimestamp()
//     // send embed
//     message.channel.send({ embeds: [embed] });
//   }

//   if (message.content.toLowerCase() === "+hug") {
//     const url = "https://some-random-api.ml/animu/hug"
//     const res = await fetch(url);
//     const json = await res.json();
     
//     message.channel.send(json.link);
//   }
  

})
client.on("debug", ( e ) => console.log(e));
client.login(process.env.token)