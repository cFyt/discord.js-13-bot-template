const { Client } = require("discord.js");

/**
 * @param {Client} client
 */
const reqEvent = (event) => require(`../events/${event}`);
module.exports = async (client) => {
    client.on("messageCreate", reqEvent("messageCreate"));
    client.on("interactionCreate", reqEvent("interactionCreate"));
    client.on("guildCreate", reqEvent("guildCreate"));
};