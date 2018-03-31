exports.run = (client, message) => {
  message.author.send('Command closed, for future notice.')
  message.channel.send('Check your DM')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'Sends an Support Server Link',
  usage: 'support'
};
