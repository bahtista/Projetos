//Programa cálculo de IMC

const nome = 'José';
const peso = 80;
const altura = 1.80;

const imc = peso / (altura * altura);

let message = ""

if (imc >= 30) {
     message = `${nome} você está acima do peso`
} else {
     message = `${nome} você não está acima do peso`    
}

console.log (message)