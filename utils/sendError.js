const { MessageEmbed ,Message } = require('discord.js')
/**
 * @param {Message} message
 */
function sendError(message, error) {
    let errembed = new MessageEmbed()
    .setAuthor(message.author.username,message.member.user.displayAvatarURL())
    .setColor("DARK_RED")
    .setTimestamp()
    .setDescription(error)
    message.channel.send({embeds: [errembed]})
}
module.exports = {
    sendError
}