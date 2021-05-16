const { MessageEmbed } = require('discord.js');
const puppeteer = require('puppeteer');
module.exports.run = async (bot, message, args) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.derkonjugator.com/conjugaison/verbe/allemand/' + args[0] + '.html');
        await page.screenshot({ path: 'example.png' });

        let html = await page.$eval('.conjugBloc', e => e.outerHTML)
        if (!html || html === null) return message.reply('merci de bien orthographier le verbe')
        html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
        html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
        html = html.replace(/<\/div>/ig, '\n');
        html = html.replace(/<\/li>/ig, '\n');
        html = html.replace(/<li>/ig, '  *  ');
        html = html.replace(/<\/ul>/ig, '\n');
        html = html.replace(/<\/p>/ig, '\n');
        html = html.replace(/<br\s*[\/]?>/gi, "\n");
        html = html.replace(/<[^>]+>/ig, '');
        console.log(html)
        await browser.close();
        let embed = new MessageEmbed()
            .setColor('0c2263')
            .setTitle("conjugaison")
            .addField("le verbe " + args[0] + " se conjugue", html)
        message.channel.send(embed)
    }
    catch (err) { console.log(err) }
}
module.exports.help = {
    name: "conj",
    type: "util",
    ex: "conjugue le verbe en allemand",
    syn: ".conj <verbe en allemand>"
}
