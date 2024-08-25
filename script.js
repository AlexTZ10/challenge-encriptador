var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".container-imagen-persona");
var contenedor = document.querySelector(".container-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  var cajatexto = recuperarTexto();
  if (contieneAcentosOTraCaracteristica(cajatexto)) {
    console.log("El texto contiene caracteres no permitidos.");
    alert("No está permitido encriptar ese texto");
    return;
  }
  ocultarAdelante();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  var cajatexto = recuperarTexto();
  if (contieneAcentosOTraCaracteristica(cajatexto)) {
    console.log("El texto contiene caracteres no permitidos.");
    alert("No está permitido desencriptar ese texto");
    return;
  }
  ocultarAdelante();
  resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".caja-texto");
  return cajatexto.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}

function contieneAcentosOTraCaracteristica(texto) {
  // Verifica si el texto contiene acentos, caracteres especiales o mayúsculas (excepto el !)
  return /[ÁÉÍÓÚáéíóúñÑ]/.test(texto) || /[^a-z\s!]/.test(texto);
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal += "ai";
    } else if (texto[i] === "e") {
      textoFinal += "enter";
    } else if (texto[i] === "i") {
      textoFinal += "imes";
    } else if (texto[i] === "o") {
      textoFinal += "ober";
    } else if (texto[i] === "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";
  var i = 0;

  while (i < texto.length) {
    if (texto.substring(i, i + 5) === "enter") {
      textoFinal += "e";
      i += 5;
    } else if (texto.substring(i, i + 4) === "imes") {
      textoFinal += "i";
      i += 4;
    } else if (texto.substring(i, i + 2) === "ai") {
      textoFinal += "a";
      i += 2;
    } else if (texto.substring(i, i + 4) === "ober") {
      textoFinal += "o";
      i += 4;
    } else if (texto.substring(i, i + 4) === "ufat") {
      textoFinal += "u";
      i += 4;
    } else {
      textoFinal += texto[i];
      i++;
    }
  }

  return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
  var contenido = document.querySelector(".texto-resultado").textContent;
  navigator.clipboard.writeText(contenido);
});
