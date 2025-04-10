function colorAleatorio(){
    let r = Math.floor(Math.random()*256); // Aleatorio de rojo
    let g = Math.floor(Math.random()*256); // Aleatorio de verde
    let b = Math.floor(Math.random()*256); // Aleatorio de azul
    return `rgb(${r}, ${g}, ${b})`; // me da todo en un string "rgb(..,..,..)" 
}  // importante usar `` y no '' !!! si no no te deja concatenar variables!!

document.body.style.backgroundColor = colorAleatorio();

