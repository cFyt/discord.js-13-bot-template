//This template created by cFyt https://github.com/cFyt/discord.js-13-bot-template
const { timeout } = require('../config.json');
const { getLang } = require('../utils/getLang');
const { getPrefix } = require('../utils/getprefix');
const lastuse = new Set();

module.exports = message => {
    let client = message.client
    if (message.author.type == "bot") return
    let prefix = getPrefix(message)
    if (!message.content.startsWith(prefix)) return
    if (lastuse.has(message.author.username)) return
    let command = message.content.slice(prefix.length).split(' ')[0]
    let args = message.content.slice(prefix.length).split(' ').slice(1)
    lastuse.add(message.author.username)
    setTimeout(() => {
        lastuse.delete(message.author.username)
    }, timeout * 1000);
    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }
    if (!cmd) return
    let lang = getLang(message)

    cmd.run(client, message, args, prefix, lang)
}
