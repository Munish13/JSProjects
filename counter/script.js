let inputOutput = document.getElementById("count-val");
let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");
let inputNumber = document.getElementById("inputNumber");
let resetButton = document.getElementById("reset");




minusButton.addEventListener("click", function(){
    let inputVal = parseInt(inputNumber.value);
    let countVal = parseInt(inputOutput.innerText);
    inputOutput.innerText = countVal - inputVal;
});

plusButton.addEventListener("click", function(){
    let inputVal = parseInt(inputNumber.value);
    let countVal = parseInt(inputOutput.innerText);
    inputOutput.innerText = countVal + inputVal;
});

resetButton.addEventListener("click", ()=>{
    
    inputOutput.innerText = "0";
    // console.log("reset clicked");
});

