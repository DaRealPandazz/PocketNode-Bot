const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const status = require("./resources/status.json");
const activity = require("./resources/activity.json");
bot.commands = new Discord.Collection();

  fs.readdir("./commands/", (err, files) => {
   if(err) console.log(err);
   let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0){
     console.log("Couldn't find commands.");
   return; 
  }
  
  jsfile.forEach((f, i) =>{
   let props = require(`./commands/${f}`); console.log(`${f} loaded!`);
   bot.commands.set(props.help.name, props);
   });
});

  bot.on("ready", async () => {
   setInterval(() => {
     const onStatusTime = Math.floor(Math.random() * (status.status.length -1) +1);
     bot.user.setStatus(status.status[onStatusTime]);
     }, 1111);
   setInterval(() => {
     const onActivity = Math.floor(Math.random() * (activity.games.length -1) +1);
     bot.user.setActivity(activity.games[onActivity]);
     }, 10000);
    
    console.log("Bot Alive");
});

bot.on("message", async message => {
 if(message.author.bot) return; 
 if(message.channel.type === "dm") return;
 
  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(" "); 
  let cmd = messageArray[0]; 
  let args = messageArray.slice(1); 
  let commandfile = bot.commands.get(cmd.slice(prefix.length)); 
  if(commandfile) commandfile.run(bot,message,args); 
});
   
bot.login(process.env.TOKEN)
