let phrases = ["tu fait un bot discord js à Mrc Mateboc 300, il te remerci et te paye "]
const db = require('quick.db')
module.exports.run = (bot, message, args) => {
    if(!db.get('xp.'+message.author.id)){
        db.set('xp.'+message.author.id,{niveau:1,xp:1,xptogo:10})
    }
    if(!db.get('money.'+message.author.id)){
        db.set('money.'+message.author.id,{money:10})
    }
    let phrasemoney = 'money.'+message.author.id+".money"
    let niveau = db.get('xp.'+message.author.id+".niveau")
    let moneytoadd = Math.ceil(niveau / 10) + Math.floor(Math.random()*100)
    db.add(phrasemoney, moneytoadd)
    message.channel.send(phrases[Math.floor(Math.random()* phrases.length)]+""+moneytoadd+" argi")
}
module.exports.help = {
    name: "work",
    type: "éco",
    ex: "ajoute de l'argent",
    syn: ".work"
}