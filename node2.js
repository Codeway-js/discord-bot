const Discord = require("discord.js")
const { TOKEN } = require("./config.json")
const bot = new Discord.Client();
const db = require('quick.db')
bot.events = new Discord.Collection()
bot.comand = new Discord.Collection()
let e = ['command_handler', 'event_handler']

e.forEach(handler => {
    console.log("\n" + handler.split('_')[0].toUpperCase() + "\n")
    require(`./handlers/${handler}`)(bot, Discord)
})
// une instance de messageUpdate pour les logs
bot.on("messageUpdate", (oldmsg, newmsg) => {
    if (oldmsg.author.bot) return
    if (!db.get("logs." + oldmsg.guild.id)) return
    let logs = db.get("logs." + oldmsg.guild.id + ".chanel")
    if (logs === undefined) return
    let cha = oldmsg.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return
    let msgUpdate = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('un message à été modifié')
        .addField("message d'origine", oldmsg.content)
        .addField('message édité', newmsg.content)
        .addField(`dans le salon :`, newmsg.channel)

    cha.send(msgUpdate)
})

bot.login(TOKEN)