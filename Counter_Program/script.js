

const IncreaseBtn = document.getElementById("increaseBtn");
const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn  = document.getElementById("ResetBtn");  
const Countlabel  = document.getElementById("CountLabel");


let  Count =0;

IncreaseBtn.onclick = function()
{
    Count++;
    Countlabel.textContent = Count;
}


DecreaseBtn.onclick = function()
{
    Count--;
    Countlabel.textContent = Count;
}
ResetBtn.onclick = function()
{
    Count = 0;
    Countlabel.textContent = Count;
}
