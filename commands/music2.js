const { MessageEmbed } = require('discord.js')
const ytdl = require('discord-ytdl-core')
let dispacher 
let conection
module.exports.run = (bot, message, args) => {

    // joinchannel(messge.member.voice.channel, mesage.guild.me)
    const link = args.join('')
    if(!link) return
    if(!ytdl.validateURL(link)) return
    if(!message.guild.me.voice.channel) return joinchannel(messge.member.voice.channel, mesage.guild.me)
    conection.play(ytdl(link, {filter:"audioonly", opustncoder: true, encoderArgs:["-af", "bass=g=10, dynaudnorm=f=200"]}), {type :"opus"}).then(voicedispacher => dispacher = voicedispacher)
    message.channel.send('la musique est en cours')
}
function joinchannel(member, me){
    if(!member.voice.channel) return
    if(me.voice.channel)return
   member.voice.channel.join().then(voiceConection=> conection = voiceConection)
}
module.exports.help = {
    name: "",
    type: "fun",
    ex: "joue la music test",
    syn: ".music2"
}