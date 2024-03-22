let contagemClique = -1;
let valuesInput = [];
let codigoCandidato;


function clickButton(click) {
    contagemClique++;
    if (contagemClique <= (numberOfInputs - 1)) {
        const novoInput = document.getElementById("input" + contagemClique);
        novoInput.value = click;
        valuesInput.push(click)
        codigoCandidato = parseInt(valuesInput.join(""))
        console.log(codigoCandidato)
    }
}


function clickButtons(button) {
    switch (button.id) {
        case "branco":
            alert(button.id + " tu apertou")
            break
        case "corrige":
            for(let i = 0; i < numberOfInputs; i++){
                const input = document.getElementById('input' + i);
                input.value = "";
            }
            contagemClique = -1;
            valuesInput = [];
            imagemElemento.src = "";
            nomeElemento.innerText = "";
            partidoElemento.innerText = "";
            document.getElementById("nomeParagrafo").classList.add("hidden")
            document.getElementById("partidoParagrafo").classList.add("hidden")
            break
        case "confirma":
            button.addEventListener("click", function() {
                document.getElementById("nomeParagrafo").classList.remove("hidden")
                document.getElementById("partidoParagrafo").classList.remove("hidden")
                trocaCanditado()
            });
            break
    }
}