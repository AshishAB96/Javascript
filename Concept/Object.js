

function greet(user1)
{
    if(user1.gender === "male")
    {
        if(user1.age >= 18)
        {
            console.log("Hi Mr " + user1.name +",Your age is " + user1.age + "Your are Legal to Vote" );
        }
        else 
        {
            console.log("Hi Mr " + user1.name +",Your age is " + user1.age + "Your are Not Legal to Vote" );   

        }
    }   
        
    else if(user1.gender === "female")
    {
        console.log("hi  Mis " + user1.name + "Your age is "+ user1.age);
    }
    else 
    {
        console.log("hi " + user1.name + "Your age is "+ user1.age);
    }
}




let user = 
{
    name:"Ashish",
    age: 17,
    gender: "male"
}

let user2=
{
    
    name:"Ashwini",
    age: 21,
    gender: "female"
}

greet(user);

