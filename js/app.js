let operacionEscrita = '', operadorPresionado = '', escribir = true;
const txtResultado = document.getElementById('txtResultado');
const botonesNumero = document.querySelectorAll('.numero'), botonesAccion = document.querySelectorAll('.boton--accion');

const botonera = document.querySelector('.calculadora__botones');
console.log(botonera);
botonera.addEventListener('click', (e) => {
    console.log(e.target);
});

const escribirOperacion = (valor) => {
    operacionEscrita += valor;
    txtResultado.value = operacionEscrita;
}

const limpiarOperacion = () => {
    escribir = true;
    operacionEscrita = '';
    operadorPresionado = '';
    txtResultado.value = '0';
}

const mostrarResultado = () => {
    escribir = false;
    let arregloEscrito = operacionEscrita.split(operadorPresionado);
    let numero1 = parseFloat(arregloEscrito[0]), numero2 = parseFloat(arregloEscrito[1]);
    if (operadorPresionado == '+') txtResultado.value = numero1 + numero2;
    if (operadorPresionado == '-') txtResultado.value = numero1 - numero2;
    if (operadorPresionado == '*') txtResultado.value = numero1 * numero2;
    if (operadorPresionado == '/') txtResultado.value = numero1 / numero2;
}

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        if (escribir) escribirOperacion(boton.textContent);
    });
});

botonesAccion.forEach(boton => {
    boton.addEventListener('click', () => {
        let contenidoBoton = boton.textContent;
        if (contenidoBoton == 'AC') {
            limpiarOperacion();
            return;
        } else if (contenidoBoton == '=') {
            mostrarResultado();
            return;
        }else if (escribir) {
            operadorPresionado = contenidoBoton;
            escribirOperacion(boton.textContent);
        }
    });
});