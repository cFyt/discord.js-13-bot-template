const { Client } = require("discord.js");
const fs = require("fs")
const { commandRefresh } = require('../utils/commandRefresh')
/**
 * @param {Client} client
 */
//This template created by cFyt https://github.com/cFyt/discord.js-13-bot-template

module.exports = async (client) => {
    //message commands
    fs.readdir("commands/", (err, files) => {
        if (err) console.error(err)
        files.forEach(catefile => {
            fs.readdir("commands/" + catefile, (err, files) => {
                if (err) console.error(err)
                files = files.filter(file => file.endsWith('.js'))
                files.forEach(file => {
                    let prob = require('../commands/' + catefile + "/" + file)
                    client.commands.set(prob.conf.name, prob)
                    prob.conf.aliases.forEach(alias=>{
                        client.aliases.set(alias, prob.conf.name)
                    })

                })
            })
        })

    })

    //slash commands
    fs.readdir("slashCommands/", (err, files) => {
        if (err) console.error(err)
        let cmds = []
        files.forEach(catefile => {
            fs.readdir("slashCommands/" + catefile, (err, files) => {
                if (err) console.error(err)
                files = files.filter(file => file.endsWith('.js'))
                files.forEach(file => {
                    let prob = require('../slashCommands/' + catefile + "/" + file)
                    client.slash.set(prob.conf.name, prob)
                    cmds.push({ name: prob.conf.name, description: prob.conf.description })

                })
                client.guilds.cache.forEach(guild => {
                    
                    commandRefresh(guild.id, cmds)
                })
            })
        })

    })
};