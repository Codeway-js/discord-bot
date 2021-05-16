const db = require("quick.db")
module.exports.run=(bot, message)=>{
    db.set("welcome."+message.guild.id,{ chanel : message.channel.id })
    let chan = message.channel
    let logs = db.get("logs." + message.guild.id + ".chanel")
    if (logs === undefined) return message.channel.send(`salon de bienvenue ${chan}`)
    let cha = message.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return message.channel.send(`salon de bienvenue ${chan}`)
    cha.send(`salon de bienvenue ${chan}`)
}
module.exports.help={
    name:"setwelcome",
    type: "chan",
    ex:"envoie une image avec le nom de l'utilateur qui vient d'arriver dans le salon specifie dans la commande",
    syn:".setwelcome <#channel>"
}