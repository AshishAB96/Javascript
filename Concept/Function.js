// function = A section of Reusable code.
// Declear code once , use it whenever you want.
// clas the function to execute that code 



function add(x , y)
{
    let Ans = x  + y;
    return Ans;
}

function Mult(x , y)
{
    return x * y;
}

function isEven(num)
{
    return num % 2 == 0 ? true : false;
}

function isValidEmail(email)
{
    return email.includes("@") ? true : false;
}

console.log(isEven(4));

console.log(isValidEmail("Ahishs.com"));
console.log(isValidEmail("Ashish@.com"));


