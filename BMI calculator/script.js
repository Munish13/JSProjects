let height = document.getElementById("height");
let weight = document.getElementById("weight");
let calculateBMI = document.getElementById("calculateBMI");
let bmiresult = document.getElementById("count-val");


calculateBMI.addEventListener("click", ()=>{
    let heightVal = parseInt(height.value);
    let weightVal = parseInt(weight.value);

    let result = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);

    return bmiresult.innerText = result;


});