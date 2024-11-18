// Array = a varibale like structure that can hold more then 1 value 


let fruits = ["apple" , "orange" , "banana" , "conconut"];

fruits[0] = "mango"; // it will change the first element 

fruits.push("chiku"); // push element at the end

fruits.pop(); // remove the last element 

fruits.unshift("Graps"); // add element at first 

fruits.shift(); // it will remove the first element 


let numOfFruits = fruits.length; // it will give number of elemnts present insdie the loop 

let index = fruits.indexOf("mango");

console.log(fruits);

console.log(index);

console.log(numOfFruits);

