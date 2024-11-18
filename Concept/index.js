
function radnom(resolve)
{
    setTimeout(resolve , 3000);
}
let p = new Promise(radnom);

function callback()
{
    console.log("promise succeded");
}
p.then(callback);