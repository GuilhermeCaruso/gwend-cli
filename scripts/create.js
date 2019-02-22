const readline = require("readline")
const { exec } = require('child_process');

module.exports = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Project Name: ', (name) => {
        rl.question('Version: ', (version) =>{
            console.log("> Creating project...")
            exec(`git clone https://github.com/GuilhermeCaruso/gwend ${name}`, (err, stdout, stderr)=>{
                if (err) {
                    console.log(err)
                    return
                }else {
                    console.log("> Installing dependecies...")
                    exec(`cd ${name} && npm install`, (err, stdout, stderr)=>{
                        if (err){
                            console.log(err)
                        }else {
                            console.log(`Project ${name} - V.${version} has been created`)
                        }
                    })
                }
            })            
            rl.close();
        })
    });
}