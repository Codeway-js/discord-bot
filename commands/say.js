module.exports.run = (bot, message, args, command) => {

     message.channel.send(args.join(" ")+"\n\n"+message.author.tag)
 
}

module.exports.help = {
     name: "say",
     syn:".say <message>"
}
