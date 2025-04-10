function sumaSimpleUsuario(){
    let num1 = prompt("Ingrese primer numero a sumar"); // usuario ingresa num1
    let num2 = prompt("Ingrese segundo numero a sumar"); // usuario ingresa num2

    let suma = Number(num1) + Number(num2); 


    alert('La suma de ' + num1 + '+' + num2 + ' es: ' + suma); // alerta que da el resultado de la suma
}

sumaSimpleUsuario();