let palabras = ["AMIGO","GAFAS","FOCAS"];
let numero = (Math.random()*100) %3;
var palabraSecreta = palabras[Math.ceil(numero)-1].split("");
console.log("Palabra Secreta :" , palabraSecreta);

var contador = 0;

function prueba() {
    let imputNumero = document.getElementById("inputFoormulario")
    var newDiv = document.getElementById("resultados");
    var palabraPrueba = imputNumero.value.toUpperCase() ;

    imputNumero.value = "" ;
    console.log("Palabra Prueba :" , palabraPrueba) ;

    if(contador < 5){ 
        if (palabraPrueba.length == 5){
            
            var palabraSeparada = palabraPrueba.split("");
            console.log("palabraSeparada :",palabraSeparada);

            for(i = 0 ; i < 5; i++){
                let celdas = document.createElement("div");
                celdas.classList.add("celdas");
                
                let caracter = document.createElement("p");
                caracter.classList.add("caracter");
                
                newDiv.appendChild(celdas);
                celdas.appendChild(caracter);

                let text = palabraSeparada[i];
                caracter.innerHTML = text;

                if( palabraSeparada[i] == palabraSecreta[i] ) {
                    celdas.classList.add("verde");
                } else if ( palabraSecreta.includes(palabraSeparada[i]) ){
                    celdas.classList.add("amarillo");
                } else {
                    celdas.classList.add("negro");
                }
            }
            contador++;
            
            let mensaje = document.getElementById("textMensaje");
            let text = `Intento numero ${contador}, te quedan ${5-contador} intentos`;
            mensaje.innerHTML = text;

        }else{
            alert("La palabra debe tener 5 caracteres", "intentalo nuevamente!");
        }

    } else {
        let mensaje = document.getElementById("textMensaje");
        let text = `Intentos maximos :( , recarga e intentalo nuevamente!`;
        mensaje.innerHTML = text;
    }
} 