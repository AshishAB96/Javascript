

const MyButton = document.getElementById("myButton");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1 = 0;
let randomNum2 = 0;
let randomNum3 = 0;

MyButton.onclick = function()
{
    randomNum1 = (Math.floor(Math.random() * max) + min);   
    Label1.textContent = randomNum1;

    
    randomNum2 = (Math.floor(Math.random() * max) + min);   
    Label2.textContent = randomNum2;

    
    randomNum3 = (Math.floor(Math.random() * max) + min);   
    Label3.textContent = randomNum3;
}