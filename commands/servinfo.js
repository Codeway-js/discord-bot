const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = (client, message) => {
    const guild = message.guild
    const embed = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setThumbnail(guild.iconURL())
        .addField(`plus d'info sur **${guild.name}**`,
            ` ● ID:${guild.id}

            ● Owner: ${guild.owner.user.tag} (${guild.ownerID})

            ● Roles: ${guild.roles.cache.size}

            ● crée le: ${moment(guild.createdAt).format('DD/MM/YYYY')}

            ● salon textuel: ${guild.channels.cache.filter(ch => ch.type == "text").size}
    
            ● salon afk: <#${guild.afkChannel.id}>

            ● salon vocaux: ${guild.channels.cache.filter(ch => ch.type == "voice").size}

            ● membre: ${guild.memberCount}

            ● membre en ligne: ${guild.presences.cache.size}

            ● grand serveur: ${guild.large === true ? 'oui' : 'non'}

            ● region: ${guild.region}

            ● langue: ${guild.preferredLocale}

            ● banière: ${guild.banner == true ? guild.banner : "ce serveur n'a pas de bannière"}

            ● description: ${guild.description == true ? guild.description : "ce serveur n'a pas de description"}

            ● vérifié: ${guild.vrified === 'true' ? 'oui' : 'non'}

            `
        )
        .setFooter(`Créé le ${message.guild.createdAt}`);
    message.channel.send(embed)
}
module.exports.help = {
    name: "servinfo",
    type:"info",
    ex:"vous donne plus d'infos sur le serveur",
    syn:".servinfo"
}
