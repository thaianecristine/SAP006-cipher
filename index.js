import cipher from './cipher.js';

function codificar(e) {
    e.preventDefault();
    let offset = Number(document.getElementById('offset').value);
    let criptografar = document.getElementById('criptografarText').value;
    let textoAqui = document.getElementById('codificado');
    textoAqui.innerHTML = cipher.encode(offset, criptografar);

}
document.getElementById('btnCodificar').addEventListener('click', codificar);

function descriptografar(e) {
    e.preventDefault();
    let offset = Number(document.getElementById('offset').value);
    let descriptografar = document.getElementById('descriptografarText').value;
    let textoAqui = document.getElementById('descodi');
    textoAqui.innerHTML = cipher.decode(offset, descriptografar);
}

document.getElementById('btnDescriptografar').addEventListener('click', descriptografar);

