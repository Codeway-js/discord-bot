const fs = require('fs')
const Discord = require('discord.js')
let vari = false
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
    vari = false
    function clean(text) {
        if (typeof text === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("vous ne pouvez pas créer les commande car vous avez pas les perm'")
    if (!message.guild.ownerID == message.author.id) return message.reply("tu dois être l'owner pour crée une commande")

    let cmd = args.join(" ")
    if (message.content.startsWith(".createcommands oui" || ".createcommands yes")) {
        let namec = args[0]
        let type = args[1]
        let syn = args[3]
        let ex = args[4]
        console.log(bot.cmdv)
        if (!namec || !type || !syn || !ex) return message.reply("vous devez mettre le nom")
        WriteToFile(namec, bot.cmdv, message, type, ex, syn)

        let props = require(`./${namec}.js`)
        try {

            eval(bot.commands.set(props.help.name, props))
        }
        catch (err) {
            message.reply(`le programme à fait une erreur ! la voici: ${err}`)
            return
        }
        let embed = new Discord.MessageEmbed()
            .setColor('0c2263')
            .setTitle('Une commande à été ajouté sur le serveur')
            .addField("Nom", namec)
        message.channel.send(embed)
    }
    if (message.content.startsWith(".createcommands code")) {
        let cmda = args.slice(1)
        cmda = cmda.slice(1, -1)
        console.log(cmda + " cmda")
        cmd = cmda.join(" ")
        console.log(cmd + " cmd 1")
    }
    let cmdf = cmd.split(".")
    console.log(cmdf)
    for (i = 0; i < cmdf.length; i++) {
        if (cmdf[i].startsWith("destroy()") == true || cmdf[i].startsWith("ToKEN") == true || cmdf[i].startsWith("ban") == true || cmdf[i].startsWith("kick") == true || (cmdf[i].startsWith("reply(") && !cmdf[i].endsWith("+' ')")) || (cmdf[i].startsWith("send(") && !cmdf[i].endsWith("+' '"))) {
            return vari = true
        }
    }
    if (vari) {
        if (message.author.id) {
            message.reply("tu dois créer un fichier manullement pour créer cette commande")
        } else {
            message.reply("tu dois être l'auteur pour créer cette commande")
        }
        return
    }
    try {

        const evaled = eval(cmd)
        const cleanCode = await clean(cmd);

        message.channel.send(" " + cleanCode, { code: "js" });
    }
    catch (err) {
        message.reply(`tu as fais une erreur ! la voici: ${err}`)
        return
    }
    let embed = new Discord.MessageEmbed()
        .setColor('0c2263')
        .setTitle('Commande')
        .addField("sauvagardé", "si veux tu la sauvegarder fait `.createcommands` oui")
        .addField('la commnde', cmd)
    message.channel.send(embed)
    bot.cmdv = cmd
}
function WriteToFile(nameC, contenu, message, typeC, exC, synC) {
    try {
        fs.writeFileSync("./commands/" + nameC + '.js', `module.exports.run = (bot ,message, args) => {
if(!message.guild.id == ${message.guild.id}) return
             \n${contenu}\n
}\n
module.exports.help={
name:"${nameC}",
type:"${typeC}"
ex:"${exC}"
syn:"${synC}"
}`
            , {
                mode: 0o755
            });
    } catch (err) {
        // An error occurred
        message.reply(err + ' ');
    }
}
// Write a string to another file and set the file mode to 0755

module.exports.help = {
    name: "createcommands",
    type: "admin",
    ex: "créé une commande avec le code donné en js vous pouvez utilisé  les argument suivant: bot, message args (ps si vous ne savez pas codez un bot discord aves discordjs ,ne tentez pas:cela ne vas pas faire crach le bot mais il vas vous retourner une erreur);\n vous pouvez faire `createcommands code ` et insérer votre code en js sur discord en faisant 6 fois alt gr 7 sur windows et insérez js puis votre code au milieu  **vous devez mettre un espace entre javascript et le début de votre code et en mettre un à la fin de votre code avant les 3 alt gr 7 de la fin **\n pour reply et send veiller mettre éxactement ce code à la fin de reply ou de send \n **`+' ')`**",
    syn: ".createcommands <code> || .createcommands code <code>"
}