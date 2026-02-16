let totalIngresos = 0
let totalEgresos = 0
let saldoTotal = 0

let resultado = 0


document.getElementById('generarResultadosIngresos').addEventListener('click', () => {

    const datosGuardados = JSON.parse(localStorage.getItem("registrosIngreso")) || {}; //valido para que no sea null o vacia
    const totalOrdiIng = Object.values(datosGuardados).reduce((acc, ingreso) => {
        return acc + Number(ingreso.monto);
    }, 0);
    const datosGuardadosE = JSON.parse(localStorage.getItem("registroIngExtra")) || {};
    const totalExtIng = Object.values(datosGuardadosE).reduce((acc, ingresoExtra) => {
        return acc + Number(ingresoExtra.monto);
    }, 0);

    let totalI = totalOrdiIng + totalExtIng;

    let resultado = document.getElementById("resultadoIngreso");
    resultado.textContent = totalI;
    //Asigno el valor a la variable globla para luego usarlo en el ultimo resultado.
    totalIngresos = totalI;
})


document.getElementById('generarResultadosEgresos').addEventListener('click', () => {
    const datosGuardados = JSON.parse(localStorage.getItem("registroEgreso")) || {};
    const totalOrdEgre = Object.values(datosGuardados).reduce((acc, egreso) => {
        return acc + Number(egreso.monto);
    }, 0);
    const datosGuardadosE = JSON.parse(localStorage.getItem("registroEgreExtra")) || {};
    const totalExtEgre = Object.values(datosGuardadosE).reduce((acc, egresoExtr) => {
        return acc + Number(egresoExtr.monto);
    }, 0);

    let totalEg = totalOrdEgre + totalExtEgre;

    let resultado = document.getElementById("resultadoEgreso");
    resultado.textContent = totalEg;
    //Asigno el valor a la variable globla para luego usarlo en el ultimo resultado.
    totalEgresos = totalEg;
});

document.getElementById('generarResultadosTotalAhorrado').addEventListener('click', () => {
    //Acá uso ambos valores acumulados.
    const totalGeneral = totalIngresos - totalEgresos
    let resultado = document.getElementById("resultadoTotal");
    resultado.textContent = totalGeneral;
    saldoTotal = totalGeneral;
});



function renderIngresosEgresos(registros) {

    const container = document.getElementById("listaRegistros");
    // Convierto los objetos en array
    const arrayRegistros = Object.values(registros);

    arrayRegistros.forEach(registro => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${registro.tipoDeRegistro}</strong> |
            ${registro.fecha} |
            $ ${registro.monto} |
            ${registro.detalle}
        `;
        li.classList.add("item-registro");
        container.appendChild(li);
    });
}

document.getElementById('verListadoTotalIngresosEgresos').addEventListener('click', () => {

    const container = document.getElementById("listaRegistros");
    container.innerHTML = ""; 

    const datosGuardadosIO = JSON.parse(localStorage.getItem("registrosIngreso")) || {};
    renderIngresosEgresos(datosGuardadosIO);

    const datosGuardadosIE = JSON.parse(localStorage.getItem("registroIngExtra")) || {};
    renderIngresosEgresos(datosGuardadosIE);

    const datosGuardadosEO = JSON.parse(localStorage.getItem("registroEgreso")) || {};
    renderIngresosEgresos(datosGuardadosEO);

    const datosGuardadosEE = JSON.parse(localStorage.getItem("registroEgreExtra")) || {};
    renderIngresosEgresos(datosGuardadosEE);
});