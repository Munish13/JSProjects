let userInput = document.getElementById("guessNumber");
let guessForm = document.getElementById("guessForm");
let result = document.getElementById("result");
let yourGuesses = document.getElementById("guess-numbers");

console.dir(userInput);
//userInput.clientHeight = "40";
userInput.setAttribute("draggable", true);
userInput.style.setProperty("height" , "40px", "important");

let guessArray = [];

let randomNumber = Math.round(Math.random() * 100);

guessForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const userInputVal = parseInt(userInput.value);
    userInput.value = "";
    guessArray.push(userInputVal);
    yourGuesses.innerText = guessArray.join(",");

    if(userInputVal < randomNumber){
        
        return result.innerText = "Too Low!";

    } else if(userInputVal > randomNumber){
        
        return result.innerText = "Too High!";

    }else{
        
        return result.innerText = "Congrats!";
    }


});
