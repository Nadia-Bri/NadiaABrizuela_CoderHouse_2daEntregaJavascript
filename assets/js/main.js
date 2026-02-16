

class Ingreso {
    static id = 0
    constructor(tipoDeRegistro, fecha, monto, detalle) {
        this.id = ++Ingreso.id;
        this.tipoDeRegistro = tipoDeRegistro;
        this.fecha = fecha;
        this.monto = monto;
        this.detalle = detalle
    }

}

class Egreso {
    static id = 0
    constructor(tipoDeRegistro, fecha, monto, detalle) {
        this.id = ++Egreso.id;
        this.tipoDeRegistro = tipoDeRegistro;
        this.fecha = fecha;
        this.monto = monto;
        this.detalle = detalle
    }
}


class IngresoExtra {
    static id = 0
    constructor(tipoDeRegistro, fecha, monto, detalle) {
        this.id = ++IngresoExtra.id;
        this.tipoDeRegistro = tipoDeRegistro;
        this.fecha = fecha;
        this.monto = monto;
        this.detalle = detalle
    }
}


class EgresoExtra {
    static id = 0
    constructor(tipoDeRegistro, fecha, monto, detalle) {
        this.id = ++EgresoExtra.id;
        this.tipoDeRegistro = tipoDeRegistro;
        this.fecha = fecha;
        this.monto = monto;
        this.detalle = detalle
    }
}


let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const registrosIngreso = JSON.parse(localStorage.getItem('registrosIngreso')) || {};
const registroEgreso = JSON.parse(localStorage.getItem('registroEgreso')) || {};
const registroIngExtra = JSON.parse(localStorage.getItem('registroIngExtra')) || {};
const registroEgreExtra = JSON.parse(localStorage.getItem('registroEgreExtra')) || {};

function renderCalendar() {
    // 1. Obtener primer día y total días del mes
    // 2. Generar divs para cada día en #calendarDays
    // 3. Añadir listener click a cada día para seleccionar la fecha
}

//  5. Validación del grupo en el que se registrara la operación para luego poder generar los valores.

function cargabase(registro){
    if (registro.tipoDeRegistro == "Ingresodelmes") {
        registrosIngreso[registro.id] = registro
        localStorage.setItem('registrosIngreso', JSON.stringify(registrosIngreso));
    } else if (registro.tipoDeRegistro == "Egresodelmes") {
        registroEgreso[registro.id] = registro
        localStorage.setItem('registroEgreso', JSON.stringify(registroEgreso));
    } else if (registro.tipoDeRegistro == "IngresoExtra"){
        registroIngExtra[registro.id] = registro
        localStorage.setItem('registroIngExtra', JSON.stringify(registroIngExtra));
    } else {
        registroEgreExtra[registro.id] = registro
        localStorage.setItem('registroEgreExtra', JSON.stringify(registroEgreExtra));
    }
}

// 4. al momento de cqargar los valores según tipo de Registro ingreso o exgreso, se construye el objeto segun tipo de operación y se procede a 
// resguardar en el Local Storage para registrar los valores ingresados.

document.getElementById('saveIngreso').addEventListener('click', () => {
    const tipoDeRegistro = "Ingresodelmes";
    const date = document.getElementById('ingresosDate').value;
    const monto = document.getElementById('ingresosMonto').value;
    const detalle = document.getElementById('detalle').value;
    const ingreso = new Ingreso(tipoDeRegistro, date, monto, detalle)
    cargabase(ingreso)
    alert('ingreso guardado');
});

document.getElementById('saveEgreso').addEventListener('click', () => {
    const tipoDeRegistro = "Egresodelmes";
    const date = document.getElementById('egresosDate').value;
    const monto = document.getElementById('egresosMonto').value;
    const detalle = document.getElementById('detalleegreso').value;
    const egreso = new Egreso(tipoDeRegistro, date, monto, detalle)
    cargabase(egreso)
    alert('Gasto guardado');
});

document.getElementById('saveIngresoExtra').addEventListener('click', () => {
    const tipoDeRegistro = "IngresoExtra";
    const date = document.getElementById('ingresoExtraDate').value;
    const monto = document.getElementById('ingresoExtraMonto').value;
    const detalle = document.getElementById('detalleingresoExtra').value;
    const ingresoExtra = new IngresoExtra(tipoDeRegistro, date, monto, detalle)
    cargabase(ingresoExtra)
    alert('Ingreso Extraordinario guardado');
});

document.getElementById('saveEgresoExtra').addEventListener('click', () => {
    const tipoDeRegistro = "EgresoExtra";
    const date = document.getElementById('egresoExtraDate').value;
    const monto = document.getElementById('egresoExtraMonto').value;
    const detalle = document.getElementById('detalleiEgresoExtra').value;
    const egresoExtra = new EgresoExtra(tipoDeRegistro, date, monto, detalle)
    cargabase(egresoExtra)
    alert('Egreso Extraordinario guardado');
});

renderCalendar();

const miBoton = document.getElementsByClassName('miBoton');
for(const item of miBoton){
    item.addEventListener('click', () => {
        window.location.href = './pages/saldos.html';
    });
}

