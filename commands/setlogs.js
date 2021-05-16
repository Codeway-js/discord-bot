const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = (bot, message) => {
    let chan = message.channel

    if (!db.get("logs." + message.guild.id)) {
        message.channel.send(`salon de logs ${chan}`)
        db.set("logs." + message.guild.id,{chanel : chan.id})
        return
    }
    let logs = db.get("logs." + message.guild.id + ".chanel")
    if (logs === undefined) return message.channel.send(`salon de logs ${chan}`)
    let cha = message.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return message.channel.send(`salon de logs ${chan}`)
    cha.send(`salon de logs ${chan}`)
}
module.exports.help = {
    name: "setlogs",
    type: "chan",
    ex: "envoie un message quand un message est modiffié et affiche les 2 versions et quand un message est supprimé et l'affiche",
    syn: ".setlogs <#channel>"
}