let imagemElemento = document.getElementById("imagem");
let nomeElemento = document.getElementById("nome");
let partidoElemento = document.getElementById("partido");

function trocaCanditado() {
    for (let i = 0; i < candidatos.length; i++) {
        if (codigoCandidato == candidatos[i].codigo) {
            imagemElemento.src = candidatos[i].img;
            nomeElemento.innerText = candidatos[i].nome;
            partidoElemento.innerText = candidatos[i].partido
            break;
        }
    }
}
