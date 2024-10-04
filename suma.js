
function suma(a, b) {
    return a + b;
}

function manejarClick() {
    const v1 = document.getElementById('v1');
    const v2 = document.getElementById('v2');
    const sumar = document.getElementById('sumar');

    sumar.addEventListener('click', () => {
        let resultado = suma(Number(v1.value), Number(v2.value));
        document.getElementById('valor').innerHTML = resultado;
    });
}

if (typeof window !== 'undefined') {
    manejarClick();
}

module.exports = { suma, manejarClick };
