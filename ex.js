const { MessageEmbed } = require('discord.js')
module.exports.run = (bot, message, args) => {
    let embed = new MessageEmbed()
        .setColor('0c2263')
        .setTitle("")
        .addField("", ``)
        .addField("", ``)
    message.channel.send(embed)
}
module.exports.help = {
    name: "",
    type: "",
    ex: "",
    syn: ""
}
// require("util").inspect()
// if (message.content.startsWith('.spam')) {

//     function spam() {
//         message.channel.send("<@718156685750829097> t là ?")

//     }

//     for (let i = 0; i < parseInt(args[0]); i++) {
//         setTimeout(spam, 1000)
//     }
//     return
// }