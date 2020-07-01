const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const adlmedia = new Discord.RichEmbed()
  .setTitle("ADLMedia")
  .setDescription('ADLMedia')
    message.channel.send(adlmedia)};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  permLevel: 0
};

exports.help = {
  name: 'adlmedia',
  description: 'adlmedia',
  usage: 'adlmedia'
};