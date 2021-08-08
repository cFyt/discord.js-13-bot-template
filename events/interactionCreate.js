const {  timeout } = require('../config.json')
const lastuse = new Set();

module.exports = interaction => {
    let client = interaction.client
    if (lastuse.has(interaction.member.username)) return interaction.reply('Biraz bekle!')
    lastuse.add(interaction.member.username)
    setTimeout(() => {
        lastuse.delete(interaction.member.username)
    }, timeout * 1000);
    let cmd;
    if (client.slash.has(interaction.commandName)) {
        cmd = client.slash.get(interaction.commandName);
    }
    if (!cmd) return
    cmd.run(client, interaction)
}