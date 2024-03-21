
function trocaCanditado() {
    for (let i = 0; i < candidatos.length; i++) {
        if (codigoCandidato === candidatos[i].codigo) {
            imagemElemento.src = candidatos[i].img;
            break; // Se encontramos o candidato correspondente, não precisamos continuar o loop
        }
    }
}