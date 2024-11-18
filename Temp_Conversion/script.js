// Temp conversion program 
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Result = document.getElementById("result");

let Temp; 
function convert()
{
    if(toFahrenheit.checked)
    {
        Temp = Number(textBox.value);
        Temp = Temp * 9 / 5 + 32;
        Result.textContent = Temp.toFixed(1) + "°F";
      
    }
    else if(toCelsius.checked)
    {
        Temp = Number(textBox.value);
        Temp = (Temp - 32) * (5/9);
        Result.textContent = Temp.toFixed(1) + "°C";
    }
    else 
    {
        Result.textContent = "Select the unit";
    }
}