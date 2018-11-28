#!/usr/bin/env node
const GwendCLI = require('../scripts/init-cli')

/**
 * Get arguments pass to cli
 */
const [,, ...args] = process.argv;

let gwendCli = new GwendCLI(args)

gwendCli.checkArgs()
.then((args)=>{
    for(let x = 0; x < args.length; x++ ){
        gwendCli.execCommand(args[x])
    }
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   });
      
    //   rl.question('What do you think of Node.js? ', (answer) => {
    //     console.log('Thank you for your valuable feedback:', answer);
    //     rl.close();
    //   });
    // exec('git clone https://github.com/GuilhermeCaruso/Gwend EU',(err, stdout, stderr) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     console.log(stdout);
    //   })
})
.catch((e)=> {
    if(e.length == 1) {
        console.log(`Invalid argument: ${e}`)
    }else [
        console.log(`Invalid arguments: ${e}`)
    ]
})
