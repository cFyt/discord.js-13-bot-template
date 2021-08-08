const { Client, Interaction } = require("discord.js");
/**
 * @param {Client} client
 * @param {Interaction} interaction
 */
module.exports.run =  (client,interaction) => {
    let d2 = interaction.createdTimestamp
    interaction.reply(`${d2 - Date.now()} ms`)
}
module.exports.conf = {
    "name": "ping",
    "description": "Calculating bot's ping."
}