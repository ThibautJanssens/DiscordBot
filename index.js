const auth = require('./auth.json');
const Discord = require('discord.js');
const bot = new Discord.Client();

let executor = new Map();

//key = command    value = path to file.js
executor.set('>help', require('./commands/list'));
executor.set('>ping', require('./commands/ping'));

bot.login(auth.token)

bot.on('ready', function () {
    console.log("Connected !");
    //bot.user.setAvatar('./avatars/albedo.jpg');
    bot.user.setActivity('Daydreaming').catch(console.error);
})

//confirm that the message is not from a bot and has the correct command character
bot.on('message', function (message){
    if(!message.author.bot && message.content.startsWith('>')){
        let cmd = executor.get(message.content.split(' ')[0]);
        if (cmd === undefined){
          message.reply(">help for the commands.");
        }else{
          cmd.action(message);
          message.delete();
        }
    }else{
      return;
    }
})