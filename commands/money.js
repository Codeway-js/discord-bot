const db = require('quick.db')

module.exports.run = (client, message) => {
    let msgauthorid = message.mentions.users.first() || message.author
    msgauthorid = msgauthorid.id

    if (!db.get("money." + msgauthorid + ".money")) {
        db.set('money.' + msgauthorid, { money: 10 })
    }
    if (!db.get('bank.' + msgauthorid)) {
        db.set('bank.' + msgauthorid, { money: 0 })
    }
    message.reply('tu a ' + db.get("money." + msgauthorid + ".money") + ' argi et tu as ' + db.get('bank.' + msgauthorid + ".money") + " argi en banque")

}
module.exports.help = {
    name: "money",
    type: "éco",
    ex: "vous donne votre money",
    syn: ".money"
}