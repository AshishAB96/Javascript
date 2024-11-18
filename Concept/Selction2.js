// switch case 


let testscore = 97;

let letterGrade;

if(testscore > 100)
{
    console.log("Invalid Syntax");
    return;
}
switch(true)
{
    case testscore >= 90:
    letterGrade = "A";
    break;
    case testscore >= 80:
    letterGrade = "B";
    break;
    case testscore >= 60:
        letterGrade = "C";
        break;
    case testscore >= 40:
        letterGrade = "D";
        break;
    default:
            letterGrade = "f";
}

console.log(letterGrade);