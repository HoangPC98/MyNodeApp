let fs = require('fs');

let PromiseReadFIle = new Promise((res,rej) => {
    fs.readFile('./src/example/exampleTexFile.txt','utf8', (err,data) => {
        if(err){
            rej(err)
        }
        else
            res(data)

    })
})

PromiseReadFIle
    .then((data) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })



// fs.readFile('./src/example/exampleTexFile.txt','utf8',(err, data) => {
//     if(err) {
//         return 
//     }
        
//     console.log(data);
// })

