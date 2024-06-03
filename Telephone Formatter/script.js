const telInput = document.getElementById("telephone");

telInput.addEventListener("input", (e) => {
    const inputVal = e.target.value;
    console.log(inputVal);
    if (inputVal.length === 4) {
        telInput.value = `+(${inputVal.substring(0, 3)}) - ${inputVal[inputVal.length - 1]}`
    }
});