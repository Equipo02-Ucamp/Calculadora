let numeros = [];



pedirNumeros();
calculadora();

function pedirNumeros(){
    for(let i = 0; i < 2; i++){
        numeros[i] = parseInt(prompt('Inserte el numero'));
        if(isNaN(numeros[i])){
            alert('Ingrese solo numeros');
            pedirNumeros();
            return;
        }
    }
}

function calculadora(){
    let operacion = prompt('Inserte el numero de la opcion\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir')
    operacion = Number(operacion);
    if(isNaN(operacion)){
        alert('Escriba el numero de la opcion')
        calculadora();
    }
    switch (operacion) {
        case 1:
            let total = numeros[0] + numeros[1];
            alert(`El total de la suma es: ${total}`)
            break;
        
        default:
            break;
    }

}