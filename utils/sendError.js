const { MessageEmbed, Message } = require('discord.js')
/**
 * @param {Message} message
 */
function sendError(message, error, reply) {
    if (reply) {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setAuthor(message.user.username, message.user.displayAvatarURL())
                    .setColor("DARK_RED")
                    .setTimestamp()
                    .setDescription(error)
            ]
        })
    }
    else {
        message.reply({
            embeds: [
                new MessageEmbed()
                    .setAuthor(message.user.username, message.user.displayAvatarURL())
                    .setColor("DARK_RED")
                    .setTimestamp()
                    .setDescription(error)
            ]
        })
    }

}
module.exports = {
    sendError
}
