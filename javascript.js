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


function criptografar(texto) {
    while (texto.includes("a")) {
        texto = texto.replace("a", "4")
    }
    return texto
}

btn2.addEventListener("click",() =>{

})
function descriptografar (texto){
    while (texto.includes("4")){
        
    }
}

