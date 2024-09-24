function checkBalance(balance, cost) {
    return (balance >= cost) ? true : confirm('No tienes suficiente saldo. ¿Quieres agregar fondos?');
}

// Función para solicitar el saldo y el costo del artículo
function askForPurchase() {
    const balance = parseFloat(prompt("¿Cuanto saldo tienes?"));
    const cost = parseFloat(prompt("¿Cuanto cavale el producto?"));

    if (checkBalance(balance, cost)) {
        alert("Compra realizada con éxito.");
    } else {
        alert("Compra rechazada.");
    }
}

// Llamar a la función
askForPurchase();
