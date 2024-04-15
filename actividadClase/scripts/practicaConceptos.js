// 1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTÉ CONECTADO CON EL HTML

console.log("Holaaaa, soy la actividad de hoy 10/04/2024");


// 2. TRAER LOS ELEMENTOS QUE NECESITAS DE SU HTML -> los que tienen id -> los elemntos que me traiga deben estar en una variable -> debe ser constante

//document-> me accede a mi html
//getElemntById -> me trae un elemento en particular por su identificador único
//dentro de los paréntesis DEBO PONER EL MISMO ID que puse en mi html
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

