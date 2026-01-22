console.log('Estructuras de control: if-else');

let a = 14;

/* 
Espera un valor booleano, es decir un true o false
aunque puede existir excepciones, es decir undefined, null o una asignación. 
*/

console.log({ a });
if (a >= 10) {
  console.log('a es mayor o igual que 10');
} else {
  console.log('a es menor a 10');
}
;
// console.log('fin del aplicativo.');

const hoy = new Date();
let dia = hoy.getDay(); // Imprime los días como 0:D
console.log({ hoy, dia });

/* 
En lugar de imprimir el número se requiere imprimir el día como tal.
ej: Lunes, Martes, Miércoles...
"=" es de asignación | "==" comparar pero no importa el tipo de dato | "===" evalúa que los valores 
internos sean los mismos, si no que el tipo de dato lo sea
*/

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
  /* 
  if (dia === 1) {
     console.log('Lunes');
   } else {
     console.log('no es lunes ni domingo');
   }
  */
} else if (dia === 2) {
  console.log('Martes');
} else {
  console.log('No es Lunes, Martes o Domingo...');
};


/* 
Alternativa if-else
Ejercicio sin usar if-else o switch
Usando objetos o arreglos: para realizar la misma tarea e incluir en consola el día de la semana.
*/

// Mi solución:
const day = 5;
const weekDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log(weekDay[day] || 'Día no definido.');

// Solución del curso:
/* 
Se pueden ejecutar procedimientos, usando función de flecha.
*/
const dayLetras = {
  0: 'Domingo - 0',
  1: 'Lunes - 1',
  2: 'Martes - 2',
  3: 'Miércoles - 3',
  4: 'Jueves - 4',
  5: 'Viernes - 5',
  6: 'Sábado - 6',
};
console.log(dayLetras[day]);