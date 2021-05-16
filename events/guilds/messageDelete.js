const db = require ('quick.db')
module.exports = async (Discord, bot, message)=>{
    if (message.author.bot) return
    if(!db.get("logs."+message.guild.id)) return
    let logs = db.get("logs."+message.guild.id+".chanel")
    if (logs === undefined) return
    let cha = message.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return
    let msgDelete = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('Un message à été suprimé')
        .addField('Le message', message.content)
        .addField('Dans le salon', message.channel)
    cha.send(msgDelete)
}