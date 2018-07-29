const Discord = require("discord.js");

var bot = new Discord.Client();

const PREFIX = "§";

bot.on("ready", function(){
    bot.user.setGame("§help pour de l'aide !");
    console.log("Le Bot est bien connecté !");
})

bon.on('message', message =>{
    if(message.content[0] === PREFIX) {
       if(message.content === '§Bonjour') {
           message.reply ('Salut ! Comment ça va ?');
       } 
    }
})

bot.login("NDczMDI4ODg2NjcwODY4NDgx.Dj8AEQ.dTEdp2fvEarMUlYKzR61TwPeTY0");
