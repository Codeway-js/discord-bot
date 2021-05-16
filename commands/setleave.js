const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = (bot, message) => {
    db.set("leave."+message.guild.id,{ chanel : message.channel.id })
    let chan = message.channel
    let id1 = bot.logss.find(id => id.startsWith(message.guild.id) === true)
    if(!db.get("logs."+message.guild.id)) return message.channel.send(`salon de leave ${chan}`)
    let logs = db.get("logs."+message.guild.id+".chanel")
    if (logs === undefined) return message.channel.send(`salon de leave ${chan}`)
    let cha = message.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return message.channel.send(`salon de leave ${chan}`)
    cha.send(`salon de leave ${chan}`)
}
module.exports.help = {
    name: "setleave",
    type: "chan",
    ex:"envoi un message dans le channel specifié dans la commande",
    syn:".setleave <#channel>"
}