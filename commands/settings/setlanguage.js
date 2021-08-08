const { Client, Message, Permissions, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { getLang } = require("../../utils/getLang");
const { sendError } = require("../../utils/sendError");
const { sendSuccess } = require("../../utils/sendSuccess");
/**
 * @param {Client} client
 * @param {Message} message
 */
module.exports.run = (client, message, args, prefix, lang) => {


    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return sendError(message, lang.errors.noPerm)
    if (!args[0]) return sendError(message, lang.errors.wrongUsage + "\n ```" + prefix + this.conf.usage[lang.code].usage + "```")
    let wlang = args[0].toLowerCase()
    if (wlang == lang.shortcode) return sendError(message, lang.commands.setLang.errors.sameLang + lang.lang)
    if(wlang == "tr" || wlang == "en"){
        db.set(`lang.${message.guild.id}`, wlang)
        sendSuccess(message, lang.commands.setLang.messages.success)
        return
    }else{
        return sendError(message, lang.commands.setLang.errors.noLang + "\n ```" + prefix + this.conf.usage[lang.code].usage + "```")
    }
    
}
module.exports.conf = {
    "name": "setlang",
    "description": [{
        "lang": "tr",
        "description": "Bot dilini ayarlar."
    }, {
        "lang": "en",
        "description": "Set bot's language."
    }],
    "aliases": ["dil", "lang", "dilayarla"],
    "usage": [{
        "lang": "tr",
        "usage": "dilayarla [tr || en]"
    }, {
        "lang": "en",
        "usage": "setlang [tr || en]"
    }]
}