
//file handling asynchronous
//non-blocking
const { readFile, writeFile } = require('fs')
console.log('start')
// args: file, encoding, and callback
// callback -> what would run after the operation, hence, asynchronous
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `AJKA Here is the result : ${first}, ${second}`,
             (err, result)=>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result);
                console.log('done with this task')
             }
        )

    })

    
})

console.log('starting next task')
