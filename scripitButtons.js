let contagemClique = -1;
const valuesInput = [];
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
            button.addEventListener("click", function() {
                codigoCandidato = "";
            });
            break
        case "confirma":
            button.addEventListener("click", trocaCanditado());
            break
    }
}