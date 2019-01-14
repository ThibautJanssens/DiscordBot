const commandList = require('../commandList.json');

module.exports = class List{

    static action(message){
        var opt = JSON.parse(JSON.stringify(commandList));
        var data = "```\n";
          for(var i = 0, l = opt.length; i < l; i++){
            data += opt[i]["Command"] + " - " +  opt[i]["Description"] + "\n";
          }
        data += "```";
        message.author.send("List of commands: \n====================" + data);
    }
}
