const Discord = require('discord.js')
const info = require('../data/inviteMsgs.json');
const settings = require('../settings.json');
exports.run = (client, message) => {
        message.reply("Check your DMs!")
        message.author.send(info.inviteMsg1);
        setTimeout(() => {
        message.author.send(info.inviteMsg2);
        }, 250);
        setTimeout(() => {
        message.author.send(info.inviteMsg3);
        }, 500);
  /*const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTimestamp()
    .addField("Info", `Coded by ${settings.author}`, true)
    .addField("Library", "Discord.js", true)
    .addField("Bot Version", "2.1.1", true)
    .addField("Uptime", "/uptime scrub", true)
    .addField("Servers", `${client.guilds.size}`, true)
        message.channel.send({embed});*/
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'invite',
  description: '(NOT IN USE)',
  usage: 'invite'
};


