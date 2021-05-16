const db = require("quick.db")
module.exports.run = (bot, message, args) => {
    if(message.author.id != 609675111427080210) return console.log(false)
    db.add("money."+message.author.id+".money", parseInt(args[0]))
    message.channel.send("money ajouté avec succès ")
}
module.exports.help = {
    name: "addmoney",
    type: "",
    ex: "",
    syn: ""
}