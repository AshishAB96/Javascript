const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt("Guess a number between "+minNum+"to"+maxNum);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Please enter the valid number : ");
    }
    else if(guess < minNum || guess > maxNum )
    {
        window.prompt("please enter a valid number ");
    }
    else 
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("Too Low! TRY AGIAN!");
        }
        else if(guess > answer)
        {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else 
        {
            window.alert("CORRECT! the answer was "+answer+"It took you "+attempts+"attempts");
            running = false;
        }
    }

}
