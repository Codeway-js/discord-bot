const db = require("quick.db")
module.exports.run = (bot, message, args) => {
    if (!db.get('money.' + message.author.id)) {
        db.set('money.' + message.author.id, { money: 10 })
    }
    if (!db.get('bank.' + message.author.id)) {
        db.set('bank.' + message.author.id, { money: 0 })
    }
    let money = db.get('bank.' + message.author.id + ".money")
    if (args[0] && parseInt(args[0]) <= money) {
        money = parseInt(args[0])
        console.log("test 1 "+money)
    }
    db.subtract('bank.' + message.author.id + ".money", money)
    db.add('money.' + message.author.id + ".money", money)
    message.channel.send(money + " argi transférer")
}
module.exports.help = {
    name: "with",
    type: "éco",
    ex: "transfère d'argent de la banque à la poche (c pas fr cette phrase) ",
    syn: ".with"
}