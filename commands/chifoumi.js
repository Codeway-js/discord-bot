const Discord = require('discord.js')
const choixm = ["pierre", "feuille", "ciseau"]
module.exports.run = (bot, message, args) => {
    if(!args[0]) return message.reply("tu dois dire avex qoi tu joue")
    let content = args[0].toLowerCase()
    if ((!content == "pierre") || (!content == "feuille") || (!content == "ciseau")) return message.reply("veullier indiqué votre choix (ex: .chifoumi pierre) ")
    const choix = choixm[Math.floor(Math.random() * 3)]
    if (choix == content)return message.channel.send(`Match nul : tu as fais ${content} et moi ${choix}`)
    if ((content === "pierre" && choix ==="ciseau")||(content === "feuille" && choix ==="pierre")||(content === "ciseau" && choix ==="feuille"))return message.channel.send(`tu as gagné : tu as fais ${content} et moi ${choix}`)
    message.channel.send(`j'ai gagné : tu as fais ${content} et moi ${choix}`)
}
module.exports.help = {
    name: "chifoumi",
    type: "fun",
    ex: "le jeu du pierre feuille ciseau (chifoumi)",
    syn:".chifoumi <pierre, feuille ou ciseau>"
}