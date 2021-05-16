const { MessageEmbed } = require('discord.js')
function numToEmoji(number) {
    if(!number) throw `[NumToEmoji] Missing Number !`
    if(isNaN(number)) throw `[NumToEmoji] ${number} is not a Number !`
    const numbers = [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:",":heavy_minus_sign:"]
    const preview = number.toString().split("")
    let result = ""
    preview.forEach(num => {
      if(num === "." && num === ",") return result += ":white_small_square:"
      if(num==="-") num = 10
      if(isNaN(num) || num == ' ') return result += " "
      result += numbers[parseInt(num)]
    })
    return result
  }
module.exports.run = (bot, message, args) => {
    let bin = args[0]
    let v = true
    let hex = 0
    let bin2 = bin.split('').reverse()
    for (let i = bin2.length; i > 0; i--) {
        if (bin2[i - 1] == 1) {
            if (i === bin.length) {
                hex = hex - Math.pow(2, i - 1)
            }
            else {
                hex = hex + Math.pow(2, i - 1)
            }
        } else if (bin2[i - 1] == 0) { }
        else {
            v = false
        }
    }
    if (v===false) return message.reply("vous avez mal tapé votre chiffre")
    let embed = new MessageEmbed()
        .setColor('0c2263')
        .setTitle("La conversion")
        .addField("le nombre en binaire", `${numToEmoji(bin)}`)
        .addField("le nombre en décimal", `${numToEmoji(hex)}`)
    message.channel.send(embed)
}
module.exports.help = {
    name: "todecimal",
    type: "fun",
    ex: "convertit un nombre binaire en décimal **! si vous voulez un nombre positif vous devez mettre un 0 en plus au début ",
    syn: ".todecimal <nombre en binaire>"
}