const btn1 = document.querySelector(".botao1");
const input = document.querySelector("#DigiteSeuTexto");
const imgbox2 = document.querySelector(".imagemdecodificador");
const area = document.querySelector(".box2");
const btn2 = document.querySelector(".botao2");
let armazenado = ""
btn1.addEventListener("click", () => {
    let dados = input.value;

    // validarEntrada(dados)

    const dadosCriptografado = criptografar(dados)
    imgbox2.classList.add("ocultar")
    area.textContent = dadosCriptografado
    input.value = ""
})
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar(texto) {
    armazenado = texto;

    texto = texto.toUpperCase()
    
    while (texto.includes("E")) {
        texto = texto.replace("E", "enter")
    }

    while (texto.includes("I")) {
        texto = texto.replace("I", "imes")
       
    }
    while (texto.includes("A")) {
        texto = texto.replace("A", "ai")
    }
    while (texto.includes("O")) {
        texto = texto.replace("O", "ober")
    }
    while (texto.includes("U")) {
        texto = texto.replace("U", "ufat")
    } 
    return texto.toLowerCase()
   
}

btn2.addEventListener("click", () => {
    
    input.textContent = armazenado;
    console.log(armazenado);
})

// function validarEntrada(dados) {
//     alert("Fazer validação")
// }

