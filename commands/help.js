const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 if(message.content.indexOf(process.env.PREFIX)) return;
 
 let sending = new Discord.RichEmbed()
 .setColor("GREEN")
 .setTitle("Sending Help Via DMS 📬")
 
 let help = new Discord.RichEmbed()
 .setColor("GREEN")
 .setTitle("Showing Help...")
 .addField("Commands", "[`request`,`bot`,`suggest`]", true)
 
 message.channel.send(sending);
 message.author.send(help);
 }
 
 module.exports.help = {
   name: "help"
}
