function numToEmoji(number) {
  if(!number) throw `[NumToEmoji] Missing Number !`
  if(isNaN(number)) throw `[NumToEmoji] ${number} is not a Number !`
  const numbers = [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:",":heavy_minus_sign:"]
  const preview = number.toString().split("")
  console.log(preview)
  let result = ""
  preview.forEach(num => {
    if(num === ".") return result += "."
    if(num==="-") num = 10
    if(isNaN(num) || num == ' ') return result += " "
    result += numbers[parseInt(num)]
  })
  return result
}
module.exports.run = (client, message, args) => {
  var decimal = args[0]
  var binaire = ' '

  if (isNaN(decimal)) {
    return message.channel.send(`Uniquement les nombres peuvent se convertir en binaire!`)
  }
  if(decimal > 10000000000) return message.reply("cheh alexandre")
  if (decimal < 0) {
    let decimal2 = Math.abs(parseInt(decimal) + 1)
    while (decimal2) {
      var binaire = `${decimal2 % 2}` + binaire
      decimal2 = Math.trunc(decimal2 / 2)
    }
    let binaire2 = binaire.split('')
    binaire2.unshift("0")
    binaire = binaire2
    binaire2 = ""
    binaire.forEach(element => {
      if (element === "0") {
        binaire2 = binaire2 + "1"
      }
      if (element === "1") {
        binaire2 = binaire2 + "0"
      }
    });
    message.channel.send(`En binaire, **${args[0]}** s'écrit **${numToEmoji(binaire2)}** (le dernier chiffre est négatif (par exemple 1000 le dernier chiffre est -8)) `)
  }

  if (decimal > 0) {
    while (decimal) {
      var binaire = `${decimal % 2 }`+ binaire
      var decimal = Math.trunc(decimal / 2)
    }
    binaire = "0"+binaire
    var binaire = parseInt(binaire)
    message.channel.send(`En binaire, **${args[0]}** s'écrit **${numToEmoji(binaire)}**`)
  }
};
module.exports.help = {
  name: "tobinaire",
  type: "fun",
  ex: "converti nombre en binaire",
  syn: ".tobinaire <nombre>"
}