const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config.json')
const rest = new REST({ version: '9' }).setToken(config.token);

function commandRefresh(guildlID, commands){
    (async () => {
        try {
          console.log('Adding commands to guild...');
      
          await rest.put(
            Routes.applicationGuildCommands(config.appID, guildlID),
            { body: commands },
          );
      
          console.log('Commands added successfully.');
        } catch (error) {
          console.error(error);
        }
      })();
}
module.exports = {
  commandRefresh
} 