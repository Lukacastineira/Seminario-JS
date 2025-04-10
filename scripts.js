console.log('Hola Mundo!');


let texto = "Lorem ipsum dolor sit amet";

const A= Math.floor(Math.random() * 10)+1;
const B= Math.floor(Math.random() * 10)+1;
const C= Math.floor(Math.random() * 10)+1;

let dia1 = new Date(); // fecha actual.
let dia2 = 1575978300000; // // fecha en timestamp.
let dia3 = 0;

  function contarCaracteres(t){
     console.log(t.length); // cantidad de caracteres de t.

     if (t.includes('ipsum')){
        console.log(t.indexOf('ipsum'));
     }else {
        console.log('El texto no contiene la palabra ipsum.')
     }

  }

  function imprimir1a4Mayusc(t){
    let result =
      t.substring(0,1) +// la primer letra 
      t.substring(1,4).toUpperCase() + //del 1-4 en mayusc (el 4 no incluido)
      t.substring(4,t.length); // agrego el resto del string

    console.log(result); // imprime el nuevo string con los caracteres 1,2 y 3 en mayusc
  }

  function operacionNumerica (){
    console.log (Math.pow((A + B), C));

    console.log('A: '+ A);
    console.log('B: '+ B);
    console.log('C: '+ C);

    console.log(' El numero mas grande entre A, B Y C es: '+ Math.max(A,B,C)); // devuelve el maximo
  }


  function imprimirFecha(fecha){


      dia2 = new Date(dia2); // pasar de timestamp a fecha "comun"


      let dia = fecha.getDate().toString().padStart(2, '0'); // dia del mes
      let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // toma el mes
      let anio = fecha.getFullYear(); // toma el anio

      let horas = fecha.getHours().toString().padStart(2, '0'); // hora
      let minutos = fecha.getMinutes().toString().padStart(2, '0'); // minutos 
      let segundos = fecha.getSeconds().toString().padStart(2, '0'); // segundos

      return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`; // fecha concatenada con todo lo que pide.
  }

  function intercambiarDatos(dia1,dia2){
      let aux = dia1.getFullYear(); // me guardo el anio del dia1 (fecha actual).
      dia1.setFullYear(dia2.getFullYear()); // a dia1 le asigno el anio de dia2.
      dia2.setFullYear(aux); // viceversa .
  }

  function diferenciaDeFechas (dia1, dia2){
     
     let dia3 = Math.abs(dia1.getTime() - dia2.getTime()); // resto el timestamp de los dos, me da el timestamp de la resta .

     dia3 = new Date(dia3); // lo paso a formato fecha .
 
     console.log(dia1);
     console.log(dia2);

     console.log(dia3);

     return dia3; // retorno el "dia3".

  }

  function diferenciaEnAnios (dia1, dia2) {
    let difTimeStamp = Math.abs(dia1 - dia2); // da la diferencia pero en timestamp = milisegundos
    let anios = Math.floor(difTimeStamp / (1000 * 60 * 60 * 24 * 365)); // diferencia en anios
    return anios;
  }




 /*
     PROGRAMA PRINCIPAL 
 */


  contarCaracteres(texto);// llama a la funcion contarCaracteres.
  debugger; 
  imprimir1a4Mayusc(texto);// llamado a la funcion imprime el string con parte en mayusc.
  debugger;
  operacionNumerica(); // hace la operacion ((A+B)^C) y saca el maximo.
  debugger;
  let fechaFormateada  =  imprimirFecha(dia1);

  console.log(fechaFormateada); // imprimo la fecha formateada (formato dd/mm/aaaa hh:mm:ss.)

  console.log(' Fechas antes del intercambio:');

  dia2 = new Date(dia2);

  console.log(' Anio fecha actual: ' +  dia1.getFullYear());
  console.log(' Anio fecha timestamp: ' + dia2.getFullYear());
  // imprimo las fechas antes del intercambio

  intercambiarDatos(dia1,dia2);

  console.log(' Fechas despues del intercambio:');

  console.log(' Anio fecha actual: ' + dia1.getFullYear());
  console.log(' Anio fecha timestamp: ' +  dia2.getFullYear());
  // imprimo las fechas despues del intercambio
  
  intercambiarDatos(dia1,dia2); // intercambio nuevamente los datos asi las siguientes funciones no tienen mal los datos.

  dia3 = diferenciaDeFechas(dia1,dia2);  // diferencia de fechas en timestamp.

  let diferenciaAnios = diferenciaEnAnios(dia1,dia2);

  console.log(' diferencia de fechas en anios: ' + diferenciaAnios); // imprimo diferencia de las fechas en anios.