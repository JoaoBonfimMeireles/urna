const numberOfInputs = 5 
const inputContainer = document.getElementById("inputContainer");
const inputValues = []

for(i = 0; i < numberOfInputs; i ++) {
    const input = document.createElement("input");
    input.type = "text"
    input.maxLength = 1
    input.value = ""
    input.id = "input" + i
    inputContainer.appendChild(input)
}

for (let i = 0; i < numberOfInputs; i++) {
    const inputValue = document.getElementById("input" + i).value;
    inputValues.push(Number(inputValue));
}


