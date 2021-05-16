const Discord = require('discord.js')
module.exports.run = (client, message) => {
    if (message.content.startsWith('.ban')) {
        console.log('ban')
        if (message.author.bot) return
        //définis l'utilisateur à banir et sa mention
        let user = message.mentions.members.first()
        let reason = message.content.split(" ").slice(1).join(" ").slice(23)
        //vérifi si l'utilisateur peut banir  
        const member = message.guild.member(user);
        if (!member) return
        if (user.permissions.has("ADMINISTRATOR")) return message.reply("Vous ne pouvez pas le ban car il a les perm admin")
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Vous ne pouvez pas ban car vous n'avez pas les perms").catch()
        if (!user) return message.reply("Veuillez mentionnez une personne ex: _ban @user raison_");
        if (user.id == message.author.id) return message.reply("Vous ne pouvez pas vous auto-ban");
        if (user.bannable == false) return message.channel.send('vous pouvez pas ban ce membre');
        user.ban({ reason })
        let embed = new Discord.MessageEmbed()
            .setColor('0c2263')
            .setTitle('Banisement')
            .addField("Le banni", user.displayName)
            .addField("L'auteur", message.author.username)
            .addField('Raison', reason)
        let logs = db.get("logs." + message.guild.id + ".chanel")
        if (logs === undefined) return message.channel.send(embed)
        let cha = message.guild.channels.cache.find(ch => logs == ch.id)
        if (!cha) return message.channel.send(embed)
        cha.send(embed)
    }
}
module.exports.help = {
    name: "ban",
    type: "modo",
    ex: "ban quelq'un de mentioné",
    syn: ".ban <@user>"
}