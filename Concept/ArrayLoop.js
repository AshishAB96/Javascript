///Array tradversal

let fruits  = ["Apple"  , "Chiku" , "Coconut" , "Orange", "Banana"]

fruits.sort(); // sort in alphabetical order

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}


for(i = fruits.length -1; i>= 0; i--)
{
    
    console.log(fruits[i]);
}
// short cut 
fruits.sort().reverse(); // sort in reevese order 
for(let fruit of fruits)
{
    console.log(fruit);
}


