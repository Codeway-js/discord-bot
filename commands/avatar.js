const Discord = require('discord.js')
module.exports.run = (client, message) => {
    console.log("avatar")
    
    
    let embed_avatar = new Discord.MessageEmbed()
        .setTitle("voici l'avatar de " + message.author.username)
        .setColor('0c2263')
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter("request by " + message.author.username, '')
        .setThumbnail('https://discord.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png')
        
    message.channel.send(embed_avatar)

}

module.exports.help = {
    name: "avatar",
    type: "fun",
    ex: "vous montre votre avatar",
    syn:".avatar"
}