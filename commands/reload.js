const { MessageEmbed } = require('discord.js')
module.exports.run = (bot, message, args) => {
    const cmdname = args.join(" ")
    if(!cmdname)return message.reply("Veuillez indiquez une commande")
    if(message.author.id !== "609675111427080210")return message.reply("Seul leblan(c)monster est autorisé à executer cette commande")
    delete require.cache[require.resolve("./"+cmdname+".js")]
    bot.comand.delete(require("./"+cmdname+".js").help.name)
    bot.comand.set(require("./"+cmdname+".js").help.name, require("./"+cmdname+".js"))
    message.channel.send("Commande chargé")
}
module.exports.help = {
    name: "reload",
    type: "admin",
    ex: "reload la cmd spécifié",
    syn: ".reload <cmd>"
}