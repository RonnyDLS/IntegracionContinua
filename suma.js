function suma(a, b) {
    return a + b;
}

alert('Hola mundo');
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const sumar = document.getElementById('sumar');

sumar.addEventListener('click', () => {
    let resultado = suma(Number(v1.value), Number(v2.value));
    let valorfinal = document.getElementById('valor').innerHTML = resultado;
});

module.exports = suma;
