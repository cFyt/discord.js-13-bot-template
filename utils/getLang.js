const { Message } = require("discord.js");
const db = require('quick.db');
const tr = require('../langs/tr.json')
const en = require('../langs/en.json')
/**
 * @param {Message} message
 */
function getLang(message) {
    let lang = db.get(`lang.${message.guild.id}`)
    if (lang) {
        if (lang == "tr") {
            flang = tr
        } else {
            flang = en
        }
    } else {
        flang = en
    }
    return flang
}
module.exports = {
    getLang
}