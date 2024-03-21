let contagemClique = 0;

function clickButton(click) {
    contagemClique++;
    const teste = document.getElementById("input" + (contagemClique - 1));
    teste.value = click;
}

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