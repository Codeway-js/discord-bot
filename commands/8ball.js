const Discord = require('discord.js')
module.exports.run = (client, message, arguments) => {
    let all_message = require("../commands/message.json")
    var monTableau = Object.keys(all_message).map(function (cle) {
        return [Number(cle), all_message[cle]];
    });

    let messsage = arguments.join(" ")
    if (!message.content.endsWith(" ?")) return message.reply("il faut ** un point d'interogation ** à la fin d'une question!")
    let message_modif = messsage.split(" ?")
    let randomme = Math.floor(Math.random() * Math.floor(all_message.length))
    let embend = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('8ball')
        .addField("La question", message_modif )
        .addField('La reponse', monTableau[randomme][1] )
    message.channel.send(embend)
}
module.exports.help = {
    name: "8ball",
    type: "fun",
    ex: "répond à vos questions",
    syn:".8ball <question>"
}