const { Client, Interaction, MessageEmbed } = require("discord.js");
const en = require('../../langs/en.json')
/**
 * @param {Client} client
 * @param {Interaction} interaction
 * @param {en} lang
 */
module.exports.run =  (client,interaction, options,lang) => {
    console.log(options)
    interaction.reply(`THIS IS HELP COMMAND`)
    
}
module.exports.conf = {
    "name": "help",
    "description": ["Bot ve komutlar hakkında bilgileri gösterir.","Displays bot's commands and info1."],
    "options":[
        {
            "name": "category",
            "description": "A category wants you display",
            "type": 3,
            "required": false,
            "choices": [
                {
                    "name": "Info",
                    "value": "info"
                },
                {
                    "name": "Settings",
                    "value": "settings"
                },
                {
                    "name": "Announce",
                    "value": "announce"
                }
            ]
        }
    ],
    "category": "info"
}
