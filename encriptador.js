
const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const campo_copiar = document.querySelector("#campo-mensaje");

console.log(campo_texto,campo_mensaje)

const matriz_code =[
    ["e","enter"], //indece 0
    ["i","imes"],//indice 1
    ["a","ai"],//idice 2
    ["o","ober"],//indice 3
    ["u","ufat"],//indice 4
];






//funcion encriptar
function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    //
    // Expresión regular para verificar si el texto está en minúsculas y sin acentos
    var regex = /^[a-z\s]+$/;

    // Verificar si el texto cumple con la expresión regular
    if (regex.test(texto)) {
        // El texto está en minúsculas y sin acentos
      
    } else {
        // El texto contiene mayúsculas o acentos
        swal('Ingrese algun texto','Solo se aceptan letras minúsculas y sin acentos.','error');
    }

}
function encriptar(fraceEncriptada){
    for(let i= 0; i < matriz_code.length; i++){
        console.log(matriz_code[i][0].length);
        if(fraceEncriptada.includes(matriz_code[i][0])){
            fraceEncriptada = fraceEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
 
   }
    return fraceEncriptada;
}

//desencriptar//

function btnDesencriptar(){
    const texto= desencriptar(campo_texto.value)
    campo_mensaje.value = texto;
    console.log(desencriptar);
}
function desencriptar(fraceDencriptada){
    for(let i= 0; i < matriz_code.length; i++){
        console.log(matriz_code[i][0].length);
        if(fraceDencriptada.includes(matriz_code[i][0])){
            fraceDencriptada = fraceDencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
 
   }
    return fraceDencriptada;
}


//btn copiar
function btnCopiar() {
    // Selecciona el elemento textarea
    var mensaje = document.getElementById('campo_mensaje');
  
    // Selecciona el texto dentro del textarea
    campo_mensaje.select();
  
    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');
  
    // Deselecciona el texto
    campo_mensaje.selectionEnd =  campo_mensaje.selectionStart;
  
    // Muestra un mensaje de éxito
    swal('El texto ha sido copiado al portapapeles.','success');
    console.log(campo_mensaje)
  }
  document.getElementById('btnCopiar').addEventListener('click', copiarTexto);