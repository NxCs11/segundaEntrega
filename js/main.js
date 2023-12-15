// Segunda entrega - Nicolás Cepeda: Aplicación para cargar y dividir gastos

let gastoId = 1; // Inicialización del ID para registros de los gastos
let listaDeGastos = []; //Lista inicializada donde se cargarán, eliminarán y mostrarán los datos
let totalGastos = 0 // Inicialización del total de gastos
let nroRedondeado = 0 // Inicialización para el redondeo de decimales en los gastos

// Clase creada para poder ingresar gastos
class Gastos {
    constructor(descripcion, monto) {
        this.descripcion = descripcion;
        this.monto = monto;
        this.id = gastoId;
    }
}
// Función dedicada en mostrar lista de gastos cargados
const mostrarGastos = () => {
    let descripcionesGastos = listaDeGastos.map(gasto => `ID: ${gasto.id} - Descripción: ${gasto.descripcion} - Monto: ${"$" + gasto.monto}`);
    if (descripcionesGastos.length > 0) {
        alert(descripcionesGastos.join("\n"));
    } else {
        alert("No hay gastos registrados.");
    }
};

// Función dedicada a la carga de gastos
const agregarGasto = (gasto) => {
    listaDeGastos.push(gasto);
    gastoId++
};

// Función dedicada a la eliminación de gastos cargados
const eliminarGasto = (id) => {
    let existe = listaDeGastos.some(gasto => gasto.id === id);
    if (existe) {
        listaDeGastos = listaDeGastos.filter(gasto => gasto.id !== id);
        alert("Gasto eliminado correctamente.");
    } else {
        alert("No existe ningún gasto con ese ID.")
    }
};

// Función dedicada al cálculo del total de gastos cargados
const calcularGastos = () => {
    listaDeGastos.forEach(function (gasto) {
        parseFloat(totalGastos += gasto.monto)
        nroRedondeado = totalGastos.toFixed(2)
    })
    alert(`El total de gastos es de: ${"$" + nroRedondeado}`)
    totalGastos = 0
};

// Función dedicada a la división entre X personas del total de los gastos cargados
const dividirGastos = () => {
    listaDeGastos.forEach(function (gasto) {
        parseFloat(totalGastos += gasto.monto)
    })
    let personasDividir = parseInt(prompt("Ingresar la cantidad de personas para dividir los gastos: "))
    if (!isNaN(personasDividir)) {
        nroRedondeado = (totalGastos / personasDividir).toFixed(2)
        alert(`El total a pagar por persona es de: ${"$" + nroRedondeado}`)
        totalGastos = 0
    }
    else {
        alert("¡Error! Indique la cantidad de personas a dividir mediante números.");
    }
};


// Menú con opciones multiples basadas en las funciones anteriormente creadas
const menu = () => {
    let encendido = true;

    while (encendido) {
        let opcion = parseInt(
            prompt(
                `
                Aplicación para cargar y dividir gastos:
                1 - Mostrar lista de gastos
                2 - Agregar gasto
                3 - Eliminar gasto
                4 - Calcular total de gastos
                5 - Dividir gastos
                6 - Salir
                `
            )
        );
        switch (opcion) {
            case 1:
                mostrarGastos();
                break
            case 2:
                let descripcion = prompt("Ingrese el concepto del gasto: ");
                let monto = parseFloat(prompt("Ingrese el monto correspondiente: "));
                if (!isNaN(monto)) {
                    let gasto = new Gastos(descripcion, monto);
                    agregarGasto(gasto);
                }
                else {
                    alert("¡Error! Ingrese un monto válido.");
                }
                break;
            case 3:
                let gastoId = parseInt(prompt("Ingrese el ID del gasto a eliminar: "))
                eliminarGasto(gastoId);
                break;
            case 4:
                calcularGastos();
                break;
            case 5:
                dividirGastos();
                break;
            case 6:
                encendido = false
                break;
            default:
                alert("Ingrese una opción valida.")
        }
    }
};

menu()
