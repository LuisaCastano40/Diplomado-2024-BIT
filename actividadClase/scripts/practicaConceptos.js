// 1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTÉ CONECTADO CON EL HTML

console.log("Holaaaa, soy la actividad de hoy");


// 2. TRAER LOS ELEMENTOS QUE NECESITAS DE SU HTML -> los que tienen id -> los elemntos que me traiga deben estar en una variable -> debe ser constante

//document-> me accede a mi html
//getElemntById -> me trae un elemento en particular por su identificador único
//dentro de los paréntesis DEBO PONER EL MISMO ID que puse en mi html

//Mi elemento 1 -> forma 1-> se llevan directamente el elemento a su js
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

//Mi elemento 2 -> una forma
// const btn = document.getElementById("boton");
// console.log(btn);


const mensaje = document.getElementById("mensajeEdad");
console.log(mensaje);


//2da forma es mediante eventos y crean funciones asociadas
function verificarEdad(){
    //Yo quiero que cada que le de click al botón, me salga un mensaje de "hola"

    console.log("Entró a mi funcion verificar edad");

    //para acceder no al elemento del html sino a su malor, se debe escribir el .value
    let edad = edadInput.value;
    console.log(edad);
//UTILIZAR CONDICIONALES

    if(edad>= 18){

        //acá esto es lo que sucede si la condición es verdadera
        console.log("Eres mayor de edad");

        mensaje.textContent = "Eres mayor de edad";

    } else{
        //acá se define lo que sucede cuando la condición es falsa
        console.log("Eres menor de edad");

        mensaje.textContent = "Eres menor de edad";
    }

}