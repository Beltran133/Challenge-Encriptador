
const entradaTexto = document.getElementById("entradaTexto"); 
const resultado = document.getElementById("resultado"); 

// Función para encriptar el texto
function encriptar() {
    const texto = entradaTexto.value; 
    
    console.log("Se ingresó el siguiente texto: ", texto); 

    //  Verifica si el campo de texto está vacío
    if (!texto.trim()) {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return;
    }

    //  Verifica si el texto contiene mayúsculas o tildes
    const mayusculasTildes = /[A-ZÁÉÍÓÚáéíóúÑñ]/;
    if (mayusculasTildes.test(texto)) {
        alert("No se permiten mayúsculas y/o tildes");
        return;
    }

    // Encriptación del texto ingresado
    const encriptacion = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');


    resultado.value = encriptacion;

    // Oculta el placeholder y muestra el resultado y botón de copiar
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para desencriptar el texto
function desencriptar() {
    const textoEncriptado = entradaTexto.value; 
    
    console.log("Se ingresó el siguiente texto: ", textoEncriptado); 

    // Desencriptación del texto ingresado
    const desencriptacion = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    resultado.value = desencriptacion;

    // Oculta el placeholder y muestra el resultado y botón de copiar
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    resultado.select(); 
    document.execCommand("copy"); 
    alert("Texto copiado al portapapeles"); 
}

// Evento para detectar si el campo de entrada está vacío
entradaTexto.addEventListener("input", function () {
    if (entradaTexto.value.trim() === "") {
        placeholder.style.display = "flex";
        resultado.style.display = "none";
        btnCopiar.style.display = "none";
    }
});