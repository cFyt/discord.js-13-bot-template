const { MessageEmbed, Message } = require('discord.js')
/**
 * @param {Message} message
 * @param {String} msg
 */
function sendSuccess(message, msg, reply) {
    if(reply){
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor("DARK_GREEN")
                    .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
                    .setTimestamp()
                    .setDescription(msg)
            ]
        })
    }else {
        message.reply({
            embeds: [
                new MessageEmbed()
                    .setColor("DARK_GREEN")
                    .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
                    .setTimestamp()
                    .setDescription(msg)
            ]
        })
    }
    
}
module.exports = {
    sendSuccess
}
