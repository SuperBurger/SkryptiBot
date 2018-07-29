const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("§help pour de l'aide !");
    console.log("Le Bot est bien connecté !");
})

bot.login("NDczMDI4ODg2NjcwODY4NDgx.Dj8AEQ.dTEdp2fvEarMUlYKzR61TwPeTY0");
