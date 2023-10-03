
// Objeto Date (função construtora) - new Date()

// const data = new Date(2019, 3) // ano, mes, dia, hora, sec, ms
// console.log(data.toString());

const data = new Date();

console.log('Data Completa', data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay());

