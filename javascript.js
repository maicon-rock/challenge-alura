const btn1 = document.querySelector(".botao1");
const input = document.querySelector("#DigiteSeuTexto");
const imgbox2 = document.querySelector(".imagemdecodificador");
const area = document.querySelector(".box2");
const btn2 = document.querySelector(".botao2");

btn1.addEventListener("click", () => {
    const dados = input.value;
    const codificado = criptografar(dados)
    imgbox2.classList.add("ocultar")
    area.textContent = codificado
    // area.classList.remove("ocultar")
    input.value = ""
})
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar(texto) {
    while (texto.includes("a")) {
        texto = texto.replace("a", "4")
    }
    return texto
}

btn2.addEventListener("click",() =>{
    const dados = area.value;
    const descodificado = descriptografar(dados)
    input.textContent = descodificado
    
})
function descriptografar(texto){
    while (texto.includes("4")) {
        texto = texto.replace("4", "a")
    }
    return texto
}
