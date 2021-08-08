const config = require('./config.json')
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();
client.aliases = new Collection();
client.slash = new Collection();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity({
    type: "LISTENING",
    name: "https://cFyt.me",
  })
  require('./utils/handler')(client)
  require('./utils/event')(client)
});
//This template created by cFyt https://github.com/cFyt/discord.js-13-bot-template
client.login(config.token);