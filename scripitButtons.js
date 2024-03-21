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
        trocaCanditado()
    }
}

console.log(codigoCandidato)

function clickButtons(button) {
    switch (button) {
        case "branco":
            alert(button + " tu apertou")
            break
        case "corrige":
            alert(button + " tu apertou")
            break
        case "confirma":
            alert(button + " tu apertou")
            break
    }
}