const Discord = require("discord.js");

var bot = new Discord.Client();

const PREFIX = "§";

bot.on("ready", function(){
    bot.user.setGame("§help pour de l'aide !");
    console.log("Le Bot est bien connecté !");
});
bot.on('message',message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '§Salut') {
            message.channel.send('Salut ! Comment ça va ?');
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Salut ! Je me présente SkryptiBot, d'abord, Bienvenue ! Si tu as besoin d'aide n'hésite pas à faire §help dans un salon du Discord :) J'espère que tu resteras avec nous " + member.displayName + "!")
    })
})

bot.login("NDczMDI4ODg2NjcwODY4NDgx.Dj8AEQ.dTEdp2fvEarMUlYKzR61TwPeTY0");
