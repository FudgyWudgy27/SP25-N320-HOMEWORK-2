const fs = require("fs");
const path = require("path");
const readline = require("readline");

const app = readline.createInterface({
    output: process.stdout,
    input: process.stdin,
});

// function createFile(){
    app.question("Name of folder:", function(folderName){
        const folderPath = path.resolve(folderName);

        if(!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
        }

        // app.question(
        //     `Is another folder required?
        //     1. Yes
        //     2. No`,
        //     function(userAnswer){
        //         if(userAnswer === "1"){
        //             createFile();
        //         } else if(userAnswer === "2"){
                    app.question("Name of file:", function(fileName){
                        const newFile = path.join(folderPath, `${fileName}.js`)
                        fs.writeFileSync(newFile, "");
            
                        app.close();
                    })
                // }
            // }
        // )
    })
// }

// createFile();