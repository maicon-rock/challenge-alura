
const btn1 = document.querySelector(".botao1");
const input = document.querySelector("#DigiteSeuTexto");
const imgbox2 = document.querySelector(".imagemdecodificador");
const area = document.querySelector(".box2");
const btn2 = document.querySelector(".botao2");
let armazenado = "";

btn1.addEventListener("click", () => {
    let dados = input.value;
    const resultado = validarEntrada(dados)

    if (resultado) {
        alert("Apenas letras minúsculas e sem acento")
        input.value = ""
    } else {
        processar(dados)
    }
})

function processar(texto) {
    const dadosCriptografado = criptografar(texto)
    imgbox2.classList.add("ocultar")
    area.textContent = dadosCriptografado
    input.value = ""
}

function validarEntrada(entradaDeTexto) {
    const listaDeAcentos = ["á", "é", "í", "ó", "ú", "ã", "õ", "à", "ê", "â", "ç", "ô"]
    let teste = false
    const listaDePalavras = entradaDeTexto.split(" ")
    
    for (const palavra of listaDePalavras) {
        for (let letra of palavra) {
            if (letra === letra.toUpperCase()) {
                teste = true
                break  
            }

            for (let caracter of listaDeAcentos) {
                if (letra === caracter) {
                    teste = true
                }
            }
        }
    }
    return teste
}

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
    area.textContent = armazenado;

})


