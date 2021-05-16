// const { MessageEmbed } = require('discord.js')

// const DDG = require('ddg-api-master').DDG
// const ddg = new DDG("Le_blanc_bot")
// const translate = require('translate-master');
// translate.engine = "libre"
// module.exports.run = async (bot, message, args)=> {
//     const text = await translate(args.join(" "), { from: "fr", to: "en" })
//     ddg.instantAnswer(text + " ", { skip_disambig: '0' }, async function (err, response) {
//         let urll = response.AbstractURL.split("")
//         urll[8] = "f"
//         urll[9] = "r"
//         urll = urll.join("").split("/")
//         urll[4] = args[0]
//         if (response.RelatedTopics[0] === undefined) return message.reply("pas de résultat trouvé par duckduckgo https://duckduckgo.com/ ")
//         let embed = new MessageEmbed()
//             .setColor('0c2263')
//             .setTitle("Voici les Resultat de la recherche traduit par https://libretranslate.com/ ")
//             .addField("Resultat 1", `${await translate(response.RelatedTopics[0].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[0].FirstURL}`)
//             .addField("Resultat 2", `${(response.RelatedTopics[1].Text === undefined ? "pas plus de résultat trouvé" : `${await translate(response.RelatedTopics[1].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[1].FirstURL}`)}`)
//             .addField("Resultat 3", `${(response.RelatedTopics[2].Text === undefined ? "pas plus de résultat trouvé" : `${await translate(response.RelatedTopics[2].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[2].FirstURL}`)}`)
//             .addField("Resultat 4", `${(response.RelatedTopics[3].Text === undefined ? "pas plus de résultat trouvé" : `${await translate(response.RelatedTopics[3].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[3].FirstURL}`)}`)
//             .addField("Resultat 5", `${(response.RelatedTopics[4].Text === undefined ? "pas plus de résultat trouvé" : `${await translate(response.RelatedTopics[4].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[4].FirstURL}`)}`)
//             .addField("Resultat 6", `${(response.RelatedTopics[5].Text === undefined ? "pas plus de résultat trouvé" : `${await translate(response.RelatedTopics[5].Text, { from: "en", to: "fr" })} .L'URL: ${response.RelatedTopics[5].FirstURL}`)}`)
//             .addField("Wikipédia", urll.join("/"))
//             .addField("description", (response.Abstract === '' ? "La recherche n'a pas de réponse intégré par https://duckduckgo.com/" : await translate(response.Abstract, { from: "en", to: "fr" })))
//         message.channel.send(embed)
//         let embed2 = new MessageEmbed()
//             .setColor('0c2263')
//             .setTitle("Voici les Resultat de la recherche mais non traduit ")
//             .addField("Resultat 1", `${response.RelatedTopics[0].Text} .L'URL: ${response.RelatedTopics[0].FirstURL}`)
//             .addField("Resultat 2", `${(response.RelatedTopics[1].Text === undefined ? "pas plus de résultat trouvé" : `${response.RelatedTopics[1].Text} .L'URL: ${response.RelatedTopics[1].FirstURL}`)}`)
//             .addField("Resultat 3", `${(response.RelatedTopics[2].Text === undefined ? "pas plus de résultat trouvé" : `${response.RelatedTopics[2].Text} .L'URL: ${response.RelatedTopics[2].FirstURL}`)}`)
//             .addField("Resultat 4", `${(response.RelatedTopics[3].Text === undefined ? "pas plus de résultat trouvé" : `${response.RelatedTopics[3].Text} .L'URL: ${response.RelatedTopics[3].FirstURL}`)}`)
//             .addField("Resultat 5", `${(response.RelatedTopics[4].Text === undefined ? "pas plus de résultat trouvé" : `${response.RelatedTopics[4].Text} .L'URL: ${response.RelatedTopics[4].FirstURL}`)}`)
//             .addField("Resultat 6", `${(response.RelatedTopics[5].Text === undefined ? "pas plus de résultat trouvé" : `${response.RelatedTopics[5].Text} .L'URL: ${response.RelatedTopics[5].FirstURL}`)}`)
//             .addField("Wikipédia", response.AbstractURL)
//             .addField("description", (response.Abstract === '' ? "La recherche n'a pas de réponse intégré par https://duckduckgo.com/" : response.Abstract))
//         message.channel.send(embed2)
//     })
// }
module.exports.help = {
    name: ""
}