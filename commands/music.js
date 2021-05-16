const ytdl = require('ytdl-core')
var list = []
let all_list = ""
let loopBoolean = false
let dispatcher
const ytsr = require('ytsr');
module.exports.run = async (client, message) => {
  console.log("play")
  if (message.content == ".play skip") return list.shift()
  if (message.content == ".play playlist") return message.reply(list.join(" "))
  if (message.member.voice.channel) {
    let args = message.content.split(" ")
    console.log("test 1")
    if (list.length > 0) {

      if (message.content.startsWith(".play search")) {
        const searchResults = await ytsr(args.slice(2));
        let url = Object.values(searchResults.items[0].url).join('')
        list.push(url)
        message.reply('vidéo ajouter')
      } else {
        list.push(args[1])
        message.reply('vidéo ajouter')

      }
      list.push(args[1])
      message.reply('vidéo ajouter')
    }
    else {
      console.log("test 3 "+args.slice(2).join(' '))
      if (message.content.startsWith(".play search")) {
        const searchResults = await ytsr(args.slice(2).join(' '));
        let url = Object.values(searchResults.items[0].url).join('')
        list.push(url)
        message.reply('vidéo ajouter')
      } else {
        list.push(args[1])
        message.reply('vidéo ajouter')

      }
      console.log(list);
      message.member.voice.channel.join().then(connection => {
        playMusic(connection);
        connection.on("disconect", () => { list = [] })
      }).catch(err => { console.log('erreur de connection :' + err) })
    }

  }
  else return message.reply("vous devez vous connecter")
}
function playMusic(connection) {
  dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio" }))
  dispatcher.on("finish", () => {
    if (loopBoolean) {
      playMusic(connection)
    } else {
      list.shift()
      dispatcher.destroy()
      if (list.length > 0) {
        playMusic(connection)
      } else {
        connection.disconnect()
      }
    }
  })

  dispatcher.on("error", error => {
    console.log(`Une erreur est survenue : ${error}`)
    dispatcher.destroy()
    connection.disconnect()
  })
}
module.exports.help = {
  name: "play",
  type: "util",
  ex: "joue une musique grace à un lien youtube",
  syn: ".music <url>"
}