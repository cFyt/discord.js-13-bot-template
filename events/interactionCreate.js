const {  timeout } = require('../config.json')
const { getLang } = require('../utils/getLang');
const lastuse = new Set();

module.exports = interaction => {
    let client = interaction.client
    let lang = getLang(interaction)
    if (lastuse.has(interaction.member.username)) return interaction.reply('Wait a munite!')
    lastuse.add(interaction.member.username)
    setTimeout(() => {
        lastuse.delete(interaction.member.username)
    }, timeout * 1000);
    let cmd;
    if (client.slash.has(interaction.commandName)) {
        cmd = client.slash.get(interaction.commandName);
    }
    if (!cmd) return
    let options = {}
    interaction.options._hoistedOptions.forEach(element => {
        options[element.name] = element
    });
    cmd.run(client, interaction,options, lang)
}
