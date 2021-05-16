const db = require("quick.db")
module.exports.run = (bot, message, args) => {
    let user = message.mentions.users.first()
    if(!user) return
    let userid = user.id
    if(!db.get(`money.${userid}`)){
        db.set(`money.${userid}`,{money : 10})
    }
    if(!db.get(`money.${message.author.id}`)){
        db.set(`money.${message.author.id}`,{money : 10})
    }
    let money = db.get(`money.${userid}.money`)
    db.add(`money.${message.author.id}.money`, money)
    db.subtract(`money.${userid}.money`, money)
    message.delete()
    message.channel.send("vous venez de voler "+money+" argis")
}
module.exports.help = {
    name: "rob",
    type: "éco",
    ex: "vole l'argent de quelqu'un",
    syn: ".rob <user>"
}