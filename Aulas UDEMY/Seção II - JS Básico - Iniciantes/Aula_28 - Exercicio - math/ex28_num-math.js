

const titulo = Number(prompt('Digite um Número:'));
const num_titulo = document.querySelector('.num_titulo');
const num_titulo_text = document.querySelector('.num_titulo_text');
const num_raiz = document.querySelector('.num_raiz');
const num_boolean_int = document.querySelector('.num_boolean_int');
const num_boolean_nan = document.querySelector('.num_boolean_nan');
const num_down = document.querySelector('.num_down');
const num_up = document.querySelector('.num_up');
const num_2dec = document.querySelector('.num_2dec');

num_titulo.innerHTML= titulo;
num_titulo_text.innerHTML=  titulo;
num_raiz.innerHTML= titulo ** 0.5;
num_boolean_int.innerHTML= Number.isInteger(titulo);
num_boolean_nan.innerHTML= Number.isNaN(titulo);
num_down.innerHTML= Math.floor(titulo);
num_up.innerHTML= Math.ceil(titulo);
num_2dec.innerHTML= titulo.toFixed(2);