

const db = require('quick.db')
const Discord = require('discord.js')
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

module.exports.run = (client, message) => {
    let msgauthorid = message.author.id
    let userxp = db.get("xp." + msgauthorid + ".xp")
    let userxptogo = db.get("xp." + msgauthorid + ".xptogo")
    let niveau = db.get("xp." + msgauthorid + ".niveau")

    progressBarUser = Object.values(progressBar(userxp, userxptogo, 20))
    let embed = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('XP')
        .addField("L'auteur", message.author)
        .addField("Niveau", niveau)
        .addField('Pourcentage', progressBarUser[0] + " [" + progressBarUser[1] + "%]")
    message.channel.send(embed)

}
module.exports.help = {
    name: "rank",
    type: "éco",
    ex: "vous donne votre niveau",
    syn: ".rank"
}