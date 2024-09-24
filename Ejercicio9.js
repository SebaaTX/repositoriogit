
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    let operacion = prompt("Elige una operación:\n1: Sumar\n2: Restar\n3: Multiplicar\n4: Dividir");

    let resultado;

    switch (operacion) {
        case "1":
            alert(num1 + num2);
            break;
        case "2":
            alert(num1 - num2);
            break;
        case "3":
            alert(num1 * num2);
            break;
        case "4":
            alert(num1 / num2);
            break;
        default:
            alert("Incorrecto");
    }

