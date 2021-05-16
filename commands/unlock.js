const db = require('quick.db')
const Discord = require("discord.js")
module.exports.run = (client, message) => {
    client.de = require('../dbe.json')

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("t'as pas les perm'")
    const chanel = message.mentions.channels.first() || message.channel
    if (!db.get(message.guild.id+""+chanel.id+".locked")===true) return message.reply('le salon n\'est pas lock')
    db.set(message.guild.id+""+chanel.id, {locked:false})
    message.channel.send('le salon a été unlock')
    let embed = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('Unlock')
        .addField("Salon", message.channel)
        .addField("L'auteur", message.author.username)
    let id1 = client.logss.find(id => id.startsWith(message.guild.id) === true)
    if (!id1) return message.channel.send(embed)
    id2 = id1.split(" ")
    logs = id2.slice(1)
    if (logs === undefined) return message.channel.send(embed)
    let cha = message.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return message.channel.send(embed)
    cha.send(embed)
}
module.exports.help = {
    name: "unlock",
    type: "chan",
    ex:"unlock un salon",
    syn:".unlock <#channel>"
}