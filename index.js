let palabras = ["AMIGO","GAFAS","FOCAS","AGUAS", "ALMAS", "BELLO", "CAMPO", "CARNE", "CLAVE", "COLOR", "FUEGO", "DONAR", "ELEVO", "FLORA", "GENTE", "HUMOR", "JUEGO", "NIEVE", "OBRAS", "PLATA", "QUEMA", "RAMAS", "SALUD", "TECHO", "VISTA", "LARGO", "CALOR", "DESEO", "FUEGO", "GRANO", "HOJAS", "IGUAL", "MAGIA", "PESAR", "QUEDA", "RIQUE", "UNION", "YERBA", "ZUMBA", "ABETO", "BURRO", "CIELO", "DANZA", "FELIZ", "HUEVO", "JAMON", "LIMON", "MANGO", "NADAR", "RETRO", "SALTO", "TIGRE", "VALOR", "BRISA", "CIEGA", "FLAMA", "GASTO", "HEROE", "JEFES", "LOMOS", "MACRO", "NENES", "PESOS", "QUEDAR", "RELOJ", "TURCO", "VENDE"];
let numero = (Math.random()*10000) % 70;
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

            var letrasBien = 0;

            for(i = 0 ; i < 5; i++){
                var celdas = document.createElement("div");
                celdas.classList.add("celdas");
                
                var caracter = document.createElement("p");
                caracter.classList.add("caracter");
                
                newDiv.appendChild(celdas);
                celdas.appendChild(caracter);

                let text = palabraSeparada[i];
                caracter.innerHTML = text;

                if( palabraSeparada[i] == palabraSecreta[i] ) {
                    celdas.classList.add("verde");
                    letrasBien++
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

            if ( letrasBien == 5){
                let mensaje = document.getElementById("textMensaje");
                let text = `Felicidades! :D , palabra correcta!`;
                mensaje.innerHTML = text;

                let uno = document.getElementById("uno");
                let dos = document.getElementById("dos");
                let tres = document.getElementById("tres");
                let cuatro = document.getElementById("cuatro");
                let cinco = document.getElementById("cinco");

                uno.innerHTML = palabraSecreta[0];
                dos.innerHTML = palabraSecreta[1];
                tres.innerHTML = palabraSecreta[2];
                cuatro.innerHTML = palabraSecreta[3];
                cinco.innerHTML = palabraSecreta[4];

                alert("Has adivinado la palabra!, Felicidades! :D");
                alert("Si quieres volcer a jugar, recarga la pagina");
            }

        }else{
            alert("La palabra debe tener 5 caracteres", "intentalo nuevamente!");
        }

    } else {
        let mensaje = document.getElementById("textMensaje");
        let text = `Intentos maximos :( , recarga e intentalo nuevamente!`;
        mensaje.innerHTML = text;
    }
} 