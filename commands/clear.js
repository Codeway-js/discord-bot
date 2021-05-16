
module.exports.run = (client, message) => {
   if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Vous ne pouvez pas warn car vous n'avez pas les perms").catch()
   let dl = message.content.split(" ").slice(1)
   if (!dl || isNaN(dl) || dl >= 100 || dl < 1) return message.reply("le nombre doit être entre 1 et 100")
   dlf = Number(dl)
   message.channel.bulkDelete(dlf + 1, true)
}

module.exports.help = {
   name: "clear",
   type: "chan",
   ex: "supprime le nombre de message avant entre 0 et 100",
   syn: ".clear <nombre entre un et cent>"
}