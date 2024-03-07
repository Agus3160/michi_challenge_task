//Variables
const ajax = new XMLHttpRequest() //ajax
let imagenIndex = 0               //posicion de la lista de imagenes
let imagenIndexLimit = 0          //limite de la lista
let data = []                     //Aqui guardaremos la lista de imagenes

//Elementos del DOM (HTML)
const imagen = document.getElementById('imagen')
const boton = document.getElementById('boton')

//Agregamos un evento al boton para que al darle click, cambie la imagen
boton.onclick = changeImage

//Decimos que al cargar la pagina, obtenga la lista de michis
window.onload = getData

//Funcion de Ajax para obtener la lista de michis del archivo json y guardarlos en la variable
ajax.onreadystatechange = function () {
  if (ajax.readyState == 4 && ajax.status == 200) {
    console.log(ajax.response) //Se imprime en consola la lista de links de michis
    
    /*
      Necesitamos guardar la respuesta en la variable "data" para poder mostrar las imagenes de michis
      Ademas tambien necesitamos asignarle un valor a "imagenIndexLimit" que debe ser la longitud de la lista -1

      Aqui va a ir su codigo
    */
  }
}

//Funcion para llamar a ajax para obtener la lista de michis
function getData() {
  ajax.open('GET', 'michis.json')
  ajax.responseType = 'json'
  ajax.send()
}

//Funcion para cambiar la imagen haciendo click al boton
function changeImage() {
  
  console.log("Este es el michi de la posicion: " + imagenIndex)

  imagen.src = data[imagenIndex] //Colocar el link en el elemento img de html para mostrar la imagen

  /*
    Debemos aumentar el valor de "imagenIndex" para poder cambiar de imagen 
    
    Al cambiar de imagenes, debemos verificar si "imagenIndex" es igual a "imagenIndexLimit"
    para saber si estamos en la ultima imagen de la lista, y en dicho caso, debemos 
    reiniciar el valor de "imagenIndex" a 0 para que vuelva a mostrar la imagen del principio
  
    Aqui va a ir su codigo

  */
}