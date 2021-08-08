const { Message } = require("discord.js");
const db = require('quick.db');
const defprefix = require('../config.json').prefix
/**
 * @param {Message} message
 */
function getPrefix(message) {
    let prefix = db.get(`prefix.${message.guild.id}`)
    if (prefix) {
        fprefix = prefix
    } else {
        fprefix = defprefix
    }
    return fprefix
}
module.exports = {
    getPrefix
}