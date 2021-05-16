const qrcode = require("qrcode");
const tempy = require("tempy");

module.exports.run = (bot, message, args) => {

    const qrOutput = tempy.file({ extension: "png" });
    
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.send(`**Voici votre QR de: ${args}**`)
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`
                }]
            });
        });
    }
};
module.exports.help = {
    name: "qrcode",
    type:"util",
    ex:"créer un qr code à partir d'une chaine de caractère ou d'un lien",
    syn:".qrcode <url>"
}