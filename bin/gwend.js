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
})
.catch((e)=> {
    if(e.length == 1) {

        console.log(`Invalid argument: ${e}`)

    }else [

        console.log(`Invalid arguments: ${e}`)
        
    ]
})
