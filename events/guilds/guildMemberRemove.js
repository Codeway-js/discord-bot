const Canvas = require('canvas')
const db = require('quick.db')
const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 100;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return ctx.font;
};

module.exports = async (Discord, bot, member)=>{    
    if(!db.get("leave."+member.guild.id)) return
    let logs = db.get("leave."+member.guild.id+".chanel")
    if (logs === undefined) return
    let cha = member.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return
    const canvas = Canvas.createCanvas(474, 278)
    const ctx = canvas.getContext('2d')
    const background = await Canvas.loadImage('./canvas2.jpeg')
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.font = '30px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Au revoir,', canvas.width / 2, canvas.height / 3.5);
    ctx.font = applyText(canvas, member.displayName);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(member.displayName, canvas.width / 2, canvas.height / 1.8);
    ctx.beginPath()
    ctx.arc(125, 139, 100, 0, Math.PI * 2, false)
    ctx.closePath()
    ctx.clip()
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const atachement = new Discord.MessageAttachment(canvas.toBuffer(), 'goodbye-img.png')

    cha.send(` `, atachement)}