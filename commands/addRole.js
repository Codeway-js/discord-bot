const { MessageEmbed } = require('discord.js')
module.exports.run = (bot, message, args) => {
    roleAdd
    let embed = new MessageEmbed()
        .setColor('0c2263')
        .setTitle("")
        .addField("", ``)
        .addField("", ``)
    message.channel.send(embed)
}
module.exports.help = {
    name: ""
}