const { ftruncateSync } = require("fs");

function sum(a,b)
{
    return a + b;

}

function sub(a,b)
{
    return a- b;
}

function  Devide(a, b)
{
    return a - b;

}

function Multiply(a , b)
{
    return a * b;
}


function doOperation(a, b , op)
{
 let ans = op(a, b);
 return ans;
}

let Ret = doOperation(11,22,22);

console.log(Ret);