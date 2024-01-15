

// Variables
let saldo = 1000; // Saldo inicial

// Constantes
const tasaInteres = 0.05; // Tasa de interés

// Array
let transacciones = [];

// Función para realizar una transacción
function realizarTransaccion(tipo, monto) {
    let nuevaTransaccion = {
        tipo: tipo,
        monto: monto,
    };

    if (tipo === 'ingreso') {
        saldo += monto;
    } else if (tipo === 'gasto') {
        saldo -= monto;
    }

    transacciones.push(nuevaTransaccion);
}

// Función para mostrar el estado de cuenta en la consola
function mostrarEstadoCuentaConsola() {
    console.clear();
    console.log('----- Estado de Cuenta -----');
    console.log('Saldo actual: $' + saldo);

    if (transacciones.length > 0) {
        console.log('\nTransacciones:');
        transacciones.forEach(transaccion => {
            console.log(`${transaccion.tipo} de $${transaccion.monto}`);
        });
    }
}

// Función para realizar interacción mediante cuadros de diálogo
function interactuarConUsuario() {
    let opcion = prompt('¿Quieres realizar una transacción? (Sí/No)').toLowerCase();

    if (opcion === 'si') {
        let tipo = prompt('¿Ingreso o gasto?');
        let monto = parseFloat(prompt('Ingrese el monto:'));

        if (isNaN(monto)) {
            alert('Por favor, ingrese un monto válido.');
        } else {
            realizarTransaccion(tipo, monto);
            alert(`Transacción exitosa. Saldo actual: $${saldo}`);
        }
    } else if (opcion === 'no') {
        alert('¡Hasta luego!');
    } else {
        alert('Opción no válida. Por favor, responde con "Sí" o "No".');
    }

    mostrarEstadoCuentaConsola();
}

// Invocar funciones
interactuarConUsuario();