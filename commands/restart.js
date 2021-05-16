module.exports.run = (bot, message, args) => {
    let guild = bot.guilds.cache.get(message.guild.id)

    if (609675111427080210 != message.author.id) return message.channel.send('seul leblan(c)monster peut effectuer cette commande.');

    bot.user.setPresence({ activity: { name: 'Redémarre' }, status: 'dnd' });

    message.channel.send('je me reboot, veuillez attendre quelques secondes.');

    require('child_process').exec('cmd /c start "" cmd /c bot.bat'); //changer bot.bat par le nom que vous aurez donné au fichier .bat 
    bot.destroy;

    setTimeout(() => {
        process.exit(0);
    }, 2000);
}
module.exports.help = {
    name: "restart",
    type: "admin",
    ex: "restart le bot",
    syn: ".restart"
}
