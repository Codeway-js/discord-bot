const cpuStat = require('cpu-stat');
const os = require("os")
const version = require('../package.json')
let percentcpu = 0
const moment = require('moment')
const Discord = require("discord.js")
cpuStat.usagePercent(function (err, percent, second) {
    if (err) {
        console.log(err)
    }
    percentcpu = percent
    return
})
function progressBar(num1, num2, length) {
    if (num1 < 0 || num2 < 0) return "Number can not be negative !"
    if (length <= 0) return "Text length can not be below 1"
    let result = {
        text: "",
        percent: null
    }
    const chars = {
        empty: "░",
        full: "█"
    }
    const percentProgress = Math.round((num1 / num2) * 100)
    const progressCharsFull = Math.round((num1 / num2) * length)
    do result.text += chars.full
    while (result.text.length <= progressCharsFull && result.text.length <= length)
    result.text = result.text.slice(0, -1)
    if (length >= result.text.length) {
        do result.text += chars.empty
        while (result.text.length <= length)
    }
    result.text = result.text.slice(0, -1)
    result.percent = percentProgress
    return result
}
module.exports.run = (bot, message, arguments, command, channel) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
        .setColor('0c2263')
        .addFields(

            { name: "Uptime", value: `${Math.floor(bot.uptime / 1000 / 60).toString()} minute`, inline: true },

            { name: `Mise en ligne`, value: `le ${moment(bot.readyAt).format('DD/MM/YYYY à hh:mm')}`, inline: true },
            { name: `\u200b`, value: `\u200b`, inline: true },
            { name: "Serveur", value: `${bot.guilds.cache.size.toString()}`, inline: true },
            { name: "Salons", value: bot.channels.cache.size.toString(), inline: true },
            { name: `emoji`, value: `${bot.emojis.cache.size}`, inline: true },
            { name: "utilisateur", value: bot.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b), inline: true },
            { name: `Version`, value: `discord.js@${version.dependencies['discord.js']}`, inline: true },
            { name: `Support`, value: `[invitation serveur](https://discord.gg/uWHf9MVHfk)`, inline: true }

        )
    message.channel.send(embed)
    cpuStat.usagePercent(function (err, percent, second) {
        if (err) {
            console.log(err)
        }
        percentcpu = percent
        return
    })

    let progressBarBot = Object.values(progressBar(percentcpu, 100, 14))
    const embed2 = new Discord.MessageEmbed()
        .setColor('0c2263')
        .addFields(
            { name: "CPU ", value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, inline: true },
            { name: `% d'utilisation`, value: progressBarBot[0] + " [" + progressBarBot[1] + `%] (${process.cpuUsage().system} system + ${process.cpuUsage().user} utilisateur) `, inline: true },
            { name: `Coeur`, value: cpuStat.totalCores(), inline: true },
            { name: "Architecture", value: `\`${os.arch()}\``, inline: true },
            { name: "Platforme", version: `${os.platform() != "undefined" ? os.platform() : "windows"}`, inline: true },
            { name: `Horloge`, value: `${cpuStat.clockMHz(0)} MHz`, inline: true },
            { name: "Mémoire", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(4)} / ${process.memoryUsage().heapTotal / 1024 / 1024} MB`, inline: true },
            { name: "temps initialisation", value: process.uptime() - bot.uptime }
        )
    message.channel.send(embed2)
}

module.exports.help = {
    name: "botinfo",
    type: "info",
    ex: "donne plus d'infos sur le bot",
    syn: ".botinfo"
}
