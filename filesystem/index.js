const fs = require('fs');

const fsCallBack = (error, data) => {
    if (error){
        console.log(error.message);
        return;
    }
    setTimeout(() => {
        console.log(data);
    }, 1000);

    console.log("sedang baca file")
}

fs.readFile('notes.txt', 'utf-8', fsCallBack);