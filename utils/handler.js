const fs = require("fs")
module.exports = async (client) => {
    fs.readdir("handlers/", (err,files)=>{
        if(err) console.error(err)
        files.forEach(file=>{

            if(file.endsWith('.js')){
                require('../handlers/'+file)(client)
            }
        })
    })
  };