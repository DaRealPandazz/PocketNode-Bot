const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 if(message.content.indexOf(process.env.PREFIX)) return;
 
 let requested = args[0]
 let description = args.join(" ").slice(args[0]
 
 let request = new Discord.RichEmbed()
 .setColor("GREEN")
 .setTitle(`Request By ${message.author.tag}`)
 .addField("Requested Plugin", requested, true)
 .addField("Plugin Description", description, true)
 
 module.exports.help = {
  name: "request"
  }
