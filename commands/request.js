const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.content.indexOf(process.env.PREFIX)) return;
  
  let noarg = new Discord.RichEmbed()
  .setColor("ORANGE")
  .setTitle("Usage: request <name> [description]")
  
  if(!args[0]) return message.channel.send(noarg)
  
  let bName = args[0]
  let bDesc = args.join(" ")
  let bChannel = message.guild.channels.find(`name`, "requested");
  
  let bRequest = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle(`Plugin Requested By ${message.author.tag}`)
  .setDescription("󠂪=====")
  .addField(`**Plugin Name:** ${bName}`, `**Description**: ${bDesc}\n=====`, true)
  .setTimestamp()

  let gr = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Your Plugin Request Has Been Sent!! 💾")
  
  message.channel.send(gr)
  bChannel.send(bRequest)
}

module.exports.help = {
  name: "request"
}
