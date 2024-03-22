let contagemClique = -1;
let valuesInput = [];
let codigoCandidato;


function clickButton(click) {
    contagemClique++;
    if (contagemClique <= numberOfInputs) {
        const novoInput = document.getElementById("input" + contagemClique);
        novoInput.value = click;
        valuesInput.push(click)
        codigoCandidato = parseInt(valuesInput.join(""))
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
            codigoCandidato = ""
            valuesInput = [];
            imagemElemento.src = "";
            nomeElemento.innerText = "";
            partidoElemento.innerText = "";
            document.getElementById("nomeParagrafo").classList.add("hidden")
            document.getElementById("partidoParagrafo").classList.add("hidden")
            document.getElementById("espacamentoParagrafo").classList.add("espacamento")
            break
        case "confirma":
            button.addEventListener("click", function() {
                const input = document.getElementById('input0');
                if(input.value !== "" ){
                    document.getElementById("nomeParagrafo").classList.remove("hidden")
                    document.getElementById("partidoParagrafo").classList.remove("hidden")
                    document.getElementById("espacamentoParagrafo").classList.remove("espacamento")
                }
                trocaCanditado()
            });
            break
    }
}