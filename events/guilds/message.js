const db = require('quick.db')
const config = require('../../config.json')
const fs = require('fs')

let motinterdit = []
let logs = undefined
module.exports = async (Discord, client, message) => {
    if (message.author.bot) return
    if (message.channel.type === 'dm') return
    const prefix = config.PREFIX
    const content = message.content.split(" ")
    const command = content[0].toLowerCase()
    const args = content.slice(1)
    if(db.get(message.guild.id+""+message.channel.id+".locked")===true&&(!message.content.startsWith(".unlock"))) return message.delete()
    if (message.content.startsWith(prefix)) {
        const commands = client.comand.get(command.slice(prefix.length))
        if (commands) { commands.run(client, message, args, Discord) }
        else {
            if(message.content=== ".mead"){
                client.emit("guildMemberRemove", message.member)
            }
            if (message.content.startsWith('.spam')) {

                function spam() {
                    message.channel.send("<@538628111999303680> vien voc ?")

                }

                for (let i = 0; i < parseInt(args[0]); i++) {
                    setTimeout(spam, 1000)
                }
                return
            }
            // if (message.content.startsWith(".motinterdit")) {

            //     let motguild = motinterdit.find(el => el[0] === message.guild.id)
            //     if (!args[1]) return
            //     if (!motguild) {
            //         motinterdit.push([message.guild.id, 1, args[0]])
            //         let embed = new Discord.MessageEmbed()
            //             .setColor('0c2263')
            //             .setTitle("ATTENTION un nouveau mot interdit à été ajouté")
            //             .addField("Les mot à ne pas dire", args[0])
            //         let id1 = bot.logss.find(id => id.startsWith(message.guild.id) === true)
            //         if (!id1) return message.channel.send(embed)
            //         id2 = id1.split(" ")
            //         logs = id2.slice(1)
            //         if (logs === undefined) return message.channel.send(embed)
            //         let cha = message.guild.channels.cache.find(ch => logs == ch.id)
            //         if (!cha) return message.channel.send(embed)
            //         cha.send(embed)
            //     }
            //     else {
            //         let nobre = motguild[1]
            //         let motsinderdit = motguild.slice(1)
            //         motsinderdit = motsinderdit.slice(1)
            //         if (nobre >= 10) return
            //         let motguildindex = motinterdit.findIndex(el => el[0] === message.guild.id)
            //         motinterdit.splice(motguildindex, 1)
            //         motinterdit.push([message.guild.id, nobre, args[0], '' + (motsinderdit[0]), '' + (motsinderdit[1] === undefined ? args[0] : motsinderdit[1]), '' + (motsinderdit[2] === undefined ? args[0] : motsinderdit[2]), '' + (motsinderdit[3] === undefined ? args[0] : motsinderdit[3]), '' + (motsinderdit[4] === undefined ? args[0] : motsinderdit[4]), '' + (motsinderdit[5] === undefined ? args[0] : motsinderdit[5]), '' + (motsinderdit[6] === undefined ? args[0] : motsinderdit[6]), '' + (motsinderdit[7] === undefined ? args[0] : motsinderdit[7]), '' + (motsinderdit[8] === undefined ? args[0] : motsinderdit[8]), '' + (motsinderdit[9] === undefined ? args[0] : motsinderdit[9])])

            //         let embed = new Discord.MessageEmbed()
            //             .setColor('0c2263')
            //             .setTitle("ATTENTION \n un nouveau mot interdit à été ajouté")
            //             .addField("Les mot à ne pas dire", args[0] + " " + motsinderdit.join(" "))

            //         let id1 = bot.logss.find(id => id.startsWith(message.guild.id) === true)
            //         if (!id1) return message.channel.send(embed)
            //         id2 = id1.split(" ")
            //         logs = id2.slice(1)
            //         if (logs === undefined) return message.channel.send(embed)
            //         let cha = message.guild.channels.cache.find(ch => logs == ch.id)
            //         if (!cha) return message.channel.send(embed)
            //         cha.send(embed)
            //     }
            // }
        }
    } else {

        if(!db.get('xp.'+message.author.id)){
            db.set('xp.'+message.author.id,{niveau:1,xp:1,xptogo:10})
        }
        else{
            let xpToGo =db.get('xp.'+message.author.id+".xptogo")
            let xpToAdd = Math.floor(Math.random()*3)+6
            let xp = db.get("xp."+message.author.id+".xp")
            console.log("xp plus")
            if(xpToGo<(xp + xpToAdd)){
                db.add("xp."+message.author.id+".niveau", 1)
                db.add("xp."+message.author.id+".xptogo", 10)
                db.subtract("xp."+message.author.id+".xp", xp)
                message.channel.send(`tu as gagné un niveau ${message.author}, tu a maintenant ${db.get("xp."+message.author.id+".niveau")} niveau et il te faudra ${db.get("xp."+message.author.id+".xptogo")} xp pour le prochain niveau`)
            }
            db.add("xp."+message.author.id+".xp",xpToAdd)
        }
        let motguild = motinterdit.find(el => el[0] === message.guild.id)
        if (motguild) {
            let motsinderdit = motguild.slice(1)
            motsinderdit = motsinderdit.slice(1)
            if (message.content.includes(motsinderdit[0]) || message.content.includes(motsinderdit[1]) || message.content.includes(motsinderdit[2]) || message.content.includes(motsinderdit[3]) || message.content.includes(motsinderdit[4]) || message.content.includes(motsinderdit[5]) || message.content.includes(motsinderdit[6]) || message.content.includes(motsinderdit[7]) || message.content.includes(motsinderdit[8]) || message.content.includes(motsinderdit[9])) {
                return message.delete()
            }
        }
        if(!db.get('money.'+message.author.id)){
            db.set('money.'+message.author.id,{money:10})
        }

    }
}