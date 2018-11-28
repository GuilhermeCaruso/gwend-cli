/**
 * @author Guilherme Caruso
 */
const args = require("../commands/args.json");

function GwendCLI(arguments) {
    this.args = arguments;
}
GwendCLI.prototype.checkArgs = function() {
    return new Promise((res,rej)=> {
        let invalidArgs = [];
        for(let x = 0; x < this.args.length; x++){
            if(args["list"].indexOf(this.args[x]) < 0){
               invalidArgs.push(this.args[x]);
            }
        };
        if(invalidArgs.length > 0){
            rej(invalidArgs);
        }else {
            res(this.sortArgs(this.args));
        };
    });
};

GwendCLI.prototype.sortArgs = function(argList){
    return argList.sort((item, last) => args["priority"][item] > args["priority"][last] ? 1 : ((args["priority"][item] > args["priority"][last])? -1 : 0));
};

GwendCLI.prototype.execCommand = function(command){
    require(__dirname+`/${args["scripts"][command].file}`)()
}

module.exports = GwendCLI