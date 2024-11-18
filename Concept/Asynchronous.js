
let fs = require('fs');

function print(err,data)
{
    if(err)
    {
        console.log("file not found");
    }
    else 
    {   
        console.log(data);

    }
}

fs.readFile("adddd.txt","utf-8",print);

fs.readFile("b.txt","utf-8",print);







