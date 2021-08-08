const { MessageEmbed ,Message } = require('discord.js')
/**
 * @param {Message} message
 * @param {String} msg
 */
function sendSuccess(message, msg) {
    let errembed = new MessageEmbed()
    .setAuthor(message.author.username,message.member.user.displayAvatarURL())
    .setColor("DARK_GREEN")
    .setTimestamp()
    .setDescription(msg)
    message.channel.send({embeds: [errembed]})
}
module.exports = {
    sendSuccess
}