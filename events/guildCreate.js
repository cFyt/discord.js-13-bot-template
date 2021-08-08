const { commandRefresh } = require('../utils/commandRefresh')

module.exports = guild => {
    console.log("New guild: ", guild.name)
    
    let client = guild.client
    let cmds = []
    client.slash.each(prob => {
        cmds.push({ name: prob.conf.name, description: prob.conf.description })
    })
    commandRefresh(guild.id, cmds)
}