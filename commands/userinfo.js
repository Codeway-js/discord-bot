const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = (client, message, args) => {
    let member = message.member
    if (args[0]) member = message.guild.member(message.mentions.users.first())
    const user = member.user
    const embed = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setThumbnail(user.displayAvatarURL())
        .addField(
            `plus d'info sur **${user.username}**`,
            `● Nom: ${user.tag}
            ● Surnom: ${member.displayName === user.username ? "ce joueur n'as pas de surnom" : member.displayName}
            ● Bot: ${user.bot === true ? "c'est un bot" : "ce n'est pas un bot"}
            ● Crée le: ${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}
            ● Statut: ${user.presence.status.toUpperCase()}
            ● l'utilisateur **${user.username}** a rejoint le ${moment(member.joinedAt).format('DD/MM/YYYY | hh:mm')} et possède ses role: ${member.roles.cache.map(roles => roles.name).join(', ')}`
        )
    message.channel.send(embed)
}
module.exports.help = {
    name: "userinfo"
    ,
    type: "info",
    ex: "donne plus d'infos sur quelqu'un mentionner ou vous",
    syn: ".userinfo (<@user>)"
}