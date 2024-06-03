const telInput = document.getElementById("telephone");

let previousValue = "";
let firstThreeNum = "";

telInput.addEventListener("input", (e) => {
    const inputVal = e.target.value;
    console.log(inputVal);
    if (inputVal.length === 4 && previousValue.length < inputVal.length) {
        firstThreeNum = inputVal.substring(0, 3);
        telInput.value = `+(${firstThreeNum}) - ${inputVal[inputVal.length - 1]}`
    } else if (inputVal.length === 9 && previousValue.length > inputVal.length) {
        telInput.value = firstThreeNum
    }

    previousValue = inputVal;
});