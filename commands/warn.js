let warn = []
const Discord = require('discord.js')
module.exports.run = (client, message) => {

    if (message.author.bot) return
    if (message.content == ".warn mes warn") {
        let userwarndb = db.get("Infos_membre").filter({ id: message.author.id }).find("warn").value()
        if (userwarndb == undefined) return message.reply("tu n'as pas de warn")
        let userwarn = Object.values(userwarndb)
        message.reply(userwarn[1])
        return
    }
    //définis l'utilisateur à banir et sa mention
    let User = message.mentions.users.first()
    let reason = message.content.split(" ").slice(1).join(" ").slice(23)
    //vérifi si l'utilisateur peut banir
    const member = message.mentions.members.first()
    if (!member) return message.reply("Veuillez mentionnez une personne ex: _.warn @user raison_");
    if (member.permissions.has("ADMINISTRATOR")) return message.reply("Vous ne pouvez pas le ban car il a les perm admin")
    if (!reason) return message.reply("vous devez mettre un mention")
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Vous ne pouvez pas warn car vous n'avez pas les perms").catch()
    if (!User) return message.reply("Veuillez mentionnez une personne ex: _.warn @user raison_");
    if (User.id == message.author.id) return message.reply("Vous ne pouvez pas vous auto-ban");
    if (!User.id) return
    let userid = User.id
    let userwarn = warn.find(u => u.startsWith(userid + " " + message.guild.id) === true)
    if (!userwarn) {
        message.channel.send(`${User.username} ${member.nickname === User.username ? "" : `autrement connus sous le nom ${member.nickname}`} à été warn pour la raison suivante : ${reason}.\n c'est son premier warn`)
        warn.push(User.id + " " + message.guild.id + " " + reason)
    }
    else {
        let userarn = userwarn.split(" ")
        let embend = new Discord.MessageEmbed()
            .setColor('0c2263')
            .setTitle('Kick')
            .addField("L'expulsé", User.username)
            .addField('Raison', "à cause de warn pour les raisons " + reason + " " + userarn.slice(1).slice(1).slice(1) )
        message.channel.send(embend)
        message.guild.member(User).kick(reason)

    }
}
module.exports.help = {
    name: ""
}