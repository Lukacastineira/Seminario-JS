console.log('Hola Mundo!');


let texto = "Lorem ipsum dolor sit amet";

const A= Math.floor(Math.random() * 10)+1;
const B= Math.floor(Math.random() * 10)+1;
const C= Math.floor(Math.random() * 10)+1;

let dia1 = new Date(); // fecha actual.
let dia2 = 1575978300000; // // fecha en timestamp.

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

    console.log(' El numero mas grande entre A, B Y C es: '+ Math.max(A,B,C));
  }


  function imprimirFecha(){
      console.log(dia1);
      
      console.log(new Date(dia2));

      dia2 = new Date(dia2);
      console.log(dia2);
  }

  contarCaracteres(texto);// llama a la funcion contarCaracteres.
  debugger; 
  imprimir1a4Mayusc(texto);// llamado a la funcion imprime el string con parte en mayusc.
  debugger;
  operacionNumerica();
  debugger;
  imprimirFecha();