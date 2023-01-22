const check = document.getElementById("check");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark-blue");
});

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncript() {
  // mensagem digitada pelo usuário
  let message = document.querySelector(".text-area").value;

  // Criptografa
  let encryptedMessage = message
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // mensagem criptografada na área de texto
  document.querySelector(".mensagem").value = encryptedMessage;
  textArea.value = "";
}

function btnDecript() {
  // mensagem digitada pelo usuário
  let message = document.querySelector(".text-area").value;

  // Descriptografa a mensagem
  let decryptedMessage = message
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // mensagem descriptografada na área de texto
  document.querySelector(".mensagem").value = decryptedMessage;
  textArea.value = "";
}

const element = document.querySelector(".element");

function hideImage() {
  element.style.backgroundImage = "none";
}

function showImage() {
  element.style.backgroundImage = "url(../assets/images/imagePrincipal.svg)";
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    document.getElementById(
      "Texto copiado com sucesso: " + text
    ).style.display = "block";
  } catch (err) {
    document.getElementById(
      "Não foi possível copiar o texto: ",
      err
    ).style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("encriptS").addEventListener("click", () => {
    const clicBtt = document.querySelector(".text-user-frase");
    const clicBtb = document.querySelector(".text-user");
    if (textArea.value === ".mensagem") {
      clicBtb.classList.remove("hide");
      clicBtt.classList.remove("hide");
    } else {
      clicBtb.classList.add("hide");
      clicBtt.classList.add("hide");
    }
  });
  document.getElementById("decriptS").addEventListener("click", () => {
    const clicBtt = document.querySelector(".text-user-frase");
    const clicBtb = document.querySelector(".text-user");
    if (textArea.value === ".mensagem") {
      clicBtb.classList.remove("hide");
      clicBtt.classList.remove("hide");
    } else {
      clicBtb.classList.add("hide");
      clicBtt.classList.add("hide");
    }
  });
});
