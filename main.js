const secret = require("./config.json"); //file with your bot credentials/token/etc
const discord = require("discord.js");
const client = new discord.Client();
client.login(secret.TOKEN);
client.on("ready", () => {
    console.log("Online");
});
let finish = true
client.on("message", async message => {

});

