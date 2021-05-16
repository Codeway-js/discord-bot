const discordTTS = require("discord-tts-fr");
module.exports.run = (client, msg, args) => {
    const broadcast = client.voice.createBroadcast();
    var channelId = msg.member.voice.channelID;
    var channel = client.channels.cache.get(channelId);
    channel.join().then(connection => {
        broadcast.play(discordTTS.getVoiceStream(args.join(" ")));
        const dispatcher = connection.play(broadcast);
    });
}
module.exports.help = {
    name : "°",
    type:"util",
    ex:"dit en vocal la phrase qui est écrit",
    syn:".° <t'a phrase>"
}