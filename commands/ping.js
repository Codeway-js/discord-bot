const asciify = require('asciify-image');
 
var options = {
  fit:    'box',
  width:  1,
  height: 1
}
module.exports.run = (bot, message,args) => {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Ce message a une latence de ${timeTaken}ms.`);
    message.channel.send(`Le ping du bot est: ${bot.ws.ping}ms.`);
    message.channel.send('Pinging...').then(sent => {
        sent.edit(`Ping du bot: ${sent.createdTimestamp - message.createdTimestamp}ms`);

    });

        
}
module.exports.help = {
    name: "ping",
    type:"info",
    ex:"vous donne le ping du bot",
    syn:".ping"
}