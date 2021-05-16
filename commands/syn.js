const { MessageEmbed } = require('discord.js')
let synt = require('../handlers/command_handler').syn
module.exports.run = (bot, message, args) => {
    let cmd = synt.find(n => n[0]=== args[0])
    if(!cmd)return message.reply("ce n'est pas une commande valide")
    let embed = new MessageEmbed()
        .setColor('0c2263')
        .setTitle("La syntaxe")
        .addField("La commandes", args[0] )
        .addField("La syntaxe", cmd[1])
    message.channel.send(embed)
}
module.exports.help = {
    name: "syntaxe",
    type:"help",
    ex:"vous donne les syntax pour les commandes indiquer",
    syn:".syn <commande>"
}