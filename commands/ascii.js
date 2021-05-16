
const { braillefy } = require('img2braille');
module.exports.run = async (bot, message, args) => {
    if (message.attachments.url) {
        const asciiOpts = {
            dither: false,
            invert: false,
        };
        let url = ''
        message.attachments.forEach(attachment => {
            // do something with the attachment
            url = attachment.url;
        });
        const result = await braillefy(url, 30, asciiOpts);
        message.channel.send(result)
    }
    if (args[0]) {
        const asciiOpts = {
            dither: false,
            invert: false,
        };
        let url = args[0]
        const result = await braillefy(url, 30, asciiOpts);
        message.channel.send(result)
    }
}
module.exports.help = {
    name: "ascii",
    type: "fun",
    ex: "créer une image ascii de votre image",
    syn: ".ascii <url de l'image où vous cliquez sur le plus en bas à droite et vous clhoisiser votre image>"
}