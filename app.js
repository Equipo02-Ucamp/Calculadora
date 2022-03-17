let numeros = [];
let total;



pedirNumeros();
calculadora();

function pedirNumeros() {
    for (let i = 0; i < 2; i++) {
        numeros[i] = parseInt(prompt('Inserte el numero'));
        if (isNaN(numeros[i])) {
            alert('Ingrese solo numeros');
            pedirNumeros();
            return;
        }
    }
}

function calculadora() {
    do {
        alert('Escriba el numero de la opcion\n');
        let operacion = prompt('Inserte el numero de la opcion\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir')
        operacion = Number(operacion);
    } while (isNaN(operacion));
    switch (operacion) {
        case 1:
            total = numeros[0] + numeros[1];
            alert(`El total de la suma es: ${total}`)
            break;

        case 2:
            total = numeros[0] - numeros[1];
            alert(`El total de la resta es: ${total}`)
            break;
        case 3:
            total = numeros[0] * numeros[1];
            alert(`El total de la resta es:  ${total}`);
            break;
        default:
            break;
    }

}