//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'É igual', 'É menor'

var minhaIdade = 18
var idadeMae = 43

if (minhaIdade > idadeMae){
  console.log('É maior')
} else if(minhaIdade == idadeMae) {
  console.log('É igual')
} else {
  console.log('É menor')
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5-2) && ( 5 - ' ') && (5-2);
//3

//Verifique se as seguintes variaveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false //falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

//COmpare o total de habitantes do Brasil com China ( valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('Brasil tem mais habitantes que a China');
} else {
  console.log('Brasil tem menos habitantes que a China');
}

//O que irá aparecer no console?

if(('Gato' === 'gato') && ( 5 > 2)) {
  console.log('É verdadeiro');
} else {
  console.log('É falso');
}

//irá aparecer: É verdadeiro

// O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão')
} else {
  console.log('Falso')
}

//irá aparecer: 'Cão'