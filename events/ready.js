const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = client => {
  client.user.setActivity(`~help | BSM Moderation BOT`)
  console.log(chalk.bgGreen.black(`Online and ready to serve ${client.guilds.size} servers.`));
  console.log('Credits to Scottmg_YT#2966 For making this bot \n Owners: Bdcolby1227 and Scottmg_YT')
};
