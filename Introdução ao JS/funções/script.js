//funções
//bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado(4) //16
areaQuadrado(5) //25
areaQuadrado(2) //4
//chamada de function declaration

//parenteses sempre: pi(), para executar, caso sem, apenas irá mostrar o código da função

//Parâmetros e Argumentos

//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos

//peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2 );
  return imc;
}

imc(80, 1.70) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

//Separar por virgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Eu gosto do céu'
  } else if(cor === 'Vermelho'){
    return 'Eu gosto de morango'
  } else if(cor === 'Verde'){
    return 'Eu gosto de planta'
  } else {
    return 'Eu não gosto de cores'
  }
}

//Argumentos podem ser funções
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento
var mostraConsole = function(){
  console.log('clicou');
};

addEventListener('click', mostraConsole)
//a função possui dois argumentos
// primeiro é a string 'click'
// segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritos como function() {} ou () => {}

//Função pode ou não retornar um valor

//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc)
  // para não dar undefined, coloca o return, caso nao coloque, vai dar o console.log, mas vai vir undefined pois nao definiu o return
}

imc2(20, 1.8) //undefined
console.log(imc2(30,3.8)); //retorna o imc e undefined

//Valores retornados

//Uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(80));

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

//Escopo

/* Variavéis e funções definidas dentro de um bloco {}, não são
visiveis fora dele */

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(50)); //erro totalPaises não definido, mas ao definir, mostrará 143

//Escopo Léxico

//Funções conseguem acessar variáveis que foram criadas no contexto >pai<

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

dados() // Retorna 'André,29, Rio de Janeiro, Designer'
//outrosDados(); //retorna um erro, pois está dentro de uma função

console.log(dados())

//Hoisting

//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc3(30, 1.80)

function imc3(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}