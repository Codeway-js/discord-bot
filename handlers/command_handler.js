const fs = require('fs')

let list = [[], [], [], [], [], [], [], []]
let synt = []
module.exports = (client, Discord) => {
    let sy = 0
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"))
    console.log("   " + command_files.length + " commandes sont en cours de chargement")
    for (const file of command_files) {
        const command = require(`../commands/${file}`)

        if (command.help.name) {
            client.comand.set(command.help.name, command)
            console.log("       | 〽️ | La commande " + file.split('.')[0] + " est prête")
            if (command.help.syn) {
                synt.push([command.help.name, command.help.syn])
                sy++
            }
            if (command.help.type) {
                let type = command.help.type
                if (type === "fun") {
                    list[0].push([command.help.name, command.help.ex])
                }
                if (type === "éco") {
                    list[1].push([command.help.name, command.help.ex])
                }
                if (type === "modo") {
                    list[2].push([command.help.name, command.help.ex])
                }
                if (type === "chan") {
                    list[3].push([command.help.name, command.help.ex])
                }
                if (type === "util") {
                    list[4].push([command.help.name, command.help.ex])
                }
                if (type === "admin") {
                    list[5].push([command.help.name, command.help.ex])
                }
                if (type === "info") {
                    list[6].push([command.help.name, command.help.ex])
                }
                if (type === "help") {
                    list[7].push([command.help.name, command.help.ex])
                }

            }
        }
        else {
            continue
        }
    }
    console.log("   " + sy + " commandes ont été chargées avec succès " )
}
module.exports.help = list === null ? "" : list
module.exports.syn = synt