let palabras = ["amigo","gafas","focas"];
let numero = (Math.random()*100) %3;
var palabraSecreta = palabras[Math.ceil(numero)-1];
console.log("Palabra Secreta :" , palabraSecreta);

function prueba() {
    let imputNumero = document.getElementById("inputFoormulario")
    var palabraPrueba = imputNumero.value ;
    imputNumero.value = "" ;
    console.log("Palabra Prueba :" , palabraPrueba) ;

    if (palabraPrueba.length == 5){
        var newDiv = document.createElement("div")
        newDiv.id = "resultados"

        let celdas = document.createElement("div")
        caracter.classList.add("celdas")
        newDiv.appendChild(celdas)

        let caracter = document.createElement("p")
        newDiv.appendChild(caracter)

    }else{
        alert("La palabra debe tener 5 caracteres", "intentalo nuevamente!")
    }
} 