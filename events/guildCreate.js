const { Collection } = require('discord.js')
const { commandRefresh } = require('../utils/commandRefresh')

module.exports = guild => {
    console.log("New Server: ", guild.name)
    
    let client = guild.client
    let cmds = []
    client.slash.each(prob => {
        cmds.push({ name: prob.conf.name, description: prob.conf.description, options: prob.conf.options })
    })
    commandRefresh(guild.id, cmds)
}
