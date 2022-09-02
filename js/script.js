let text = document.querySelector(".text-input");
let criptografarBtn = document.querySelector(".criptografar-btn");
let descriptografarBtn = document.querySelector(".descriptografar-btn");
let copyBtn = document.querySelector(".copy-btn");
let resultWarning = document.querySelector(".result-warning");
let resultBox = document.querySelector(".result-box");
let textResult = document.querySelector(".text-result");
const matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

criptografarBtn.addEventListener("click", criptografarText);
descriptografarBtn.addEventListener("click", descriptografarText);
copyBtn.addEventListener("click", copyTextResult);

function criptografarText() {
    textResult.value = ""

    let newText = encriptar(text.value.toLowerCase())

    resultWarning.style.display = "none"
    copyBtn.style.display = "block"
    textResult.style.backgroundImage = "none";
    textResult.style.display = "block";
    textResult.value = newText;
}

function encriptar(text) {
    for (let i = 0; i < matriz.length; i++) {
        if (text.includes(matriz[i][0])) {
            text = text.replaceAll(matriz[i][0], matriz[i][1])
        }
    }

    return text
}

function descriptografarText() {
    textResult.value = "" 

    let newText = desencriptar(text.value.toLowerCase())

    resultWarning.style.display = "none"
    copyBtn.style.display = "block"
    textResult.style.backgroundImage = "none";
    textResult.style.display = "block";
    textResult.value = newText;
}

function desencriptar(text) {
    for (let i = 0; i < matriz.length; i++) {
        if (text.includes(matriz[i][1])) {
            text = text.replaceAll(matriz[i][1], matriz[i][0])
        }
    }

    return text
}

function copyTextResult() {
  navigator.clipboard.writeText(textResult.value);
}
