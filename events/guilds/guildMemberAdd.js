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
    if(!db.get("welcome."+member.guild.id)) return
    let logs = db.get("welcome."+member.guild.id+".chanel")
    let cha = member.guild.channels.cache.find(ch => logs == ch.id)
    if (!cha) return
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    const background = await Canvas.loadImage('./canvas.jpg')
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#74037b';
    // Draw a rectangle with the dimensions of the entire canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Bienvenue à toi,', canvas.width / 2.5, canvas.height / 3.5);
    ctx.font = applyText(canvas, member.displayName);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);
    ctx.beginPath();
    // Start the arc to form a circle
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    // Put the pen down
    ctx.closePath();
    // Clip off the region you drew on
    ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    // Move the image downwards vertically and constrain its height to 200, so it's a square
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const atachement = new Discord.MessageAttachment(canvas.toBuffer(), 'welvome-img.png')
    cha.send(`<@${member.user.id}>`, atachement)
}