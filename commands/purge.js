const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let logchannel = message.guild.channels.find('name', 'mod-logs');
  if (!logchannel) return message.reply('I cannot find a mod-logs channel').catch(console.error);
  async function purge() {
    message.delete();

    if (isNaN(args[0])) {

      message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');

      return;
    }

    const fetched = await message.channel.fetchMessages({
      limit: args[0]
    });


    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`Error: ${error}`));

  }


  purge();

  const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Action:', 'Purge')
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  message.channel.send(':white_check_mark: Success! I\'ve logged the purge in mod-logs.')
  return client.channels.get(logchannel.id).send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'mutes or unmutes a mentioned user',
  usage: 'purge [amount]'
};
