const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, \n ${second}`,
            (error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log('Done with the task');
            }
        )
    })


});
console.log("Starting next task");