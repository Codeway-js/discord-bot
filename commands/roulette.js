var e1 = "🟩"
var e2 = "🟩"
var e3 = "🟩"
var nTour = 5
var vit = 1000
const db = require('quick.db')
var Lfruit = ["🍌", "🍒", "🍓", "🟩"]
function aléa(e) {
    var pos = Lfruit.indexOf(e);
    Lfruit.splice(pos, 1);
    var e = Math.floor(Math.random() * Math.floor(2))
    e = Lfruit[e]
    Lfruit = ["🍌", "🍒", "🍓", "🟩"]
    return e
}
module.exports.run = async (bot, message) => {
    let msgauthorid = message.author.id
    let usermoney = db.get("money." + msgauthorid + ".money")
    if (usermoney == undefined) {
        db.set('money.' + message.author.id, { money: 10 })
        usermoney = db.get("money." + msgauthorid + ".money")
    }
    if (usermoney <= 2) return message.reply("tu n'as pas assez d'argent pour jouer")
    db.subtract("money." + msgauthorid + ".money", 2)
    message.channel.send("🟩" + "🟩" + "🟩").then(async (message) => {
        for (let i = 0; i < nTour; i++) {
            e1 = aléa(e1)
            message.edit(e1 + " " + e2 + " " + e3)
            await new Promise(resolve => setTimeout(resolve, vit));

            e2 = aléa(e2)
            message.edit(e1 + " " + e2 + " " + e3)
            await new Promise(resolve => setTimeout(resolve, vit));

            e3 = aléa(e3)
            message.edit(e1 + " " + e2 + " " + e3)
            await new Promise(resolve => setTimeout(resolve, vit));
        }
        await new Promise(resolve => setTimeout(resolve, vit));
        if (e1 === e2 && e1 === e3) {
            message.channel.send("Et c'est gagné ! tu as gagné 8 argis")
            db.add("money." + msgauthorid + ".money", 10)
        } else {
            message.channel.send("Dommage c'est perdu ! tu as perdus 2 argis")
        }
    })

}
module.exports.help = {
    name: "roulette",
    type: "éco",
    ex: "créer un roulette pour deux argi et 8 argi à la clé",
    syn: ".roulette"
}