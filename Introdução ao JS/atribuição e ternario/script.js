//operadores de atribuição

//podem funcionar como formas abreviadas

var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador Ternário

// Abreviação de condicionais com if e else

// var idade = 19;
// var naoPossuiDiabetes = false
// var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não Pode Beber';
// console.log(podeBeber); // Pode Beber

//condição ? true : false
//se a condição for verdadeira, retorna o valor após a interrogação
//se a condição for false, retorna o valor após o dois pontos
//Geralmente utilizado quando precisamos atribuir um valor para
//uma variável, dependendo de uma condição

//If Abreviado

//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

// var possuiFaculdade = true;
// if(possuiFaculdade) console.log('Possui Faculdade');
// else console.log('Não possui Faculdade');

//ou
/* if(possuiFaculdade)
    console.log('Possui faculdade')
   else
   co */

//Origamid recomenda a segunda opção

//Exercicio

//Some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll
var scrolll = 1000;
var x = 500
console.log(x += scrolll);

//Atribua true para váriavel darCredito
//caso o cliente possua carro e casa.
//e false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Dar Crédito' : 'Não dar crédito'

//Escopo

//Escopo de função

//Variavéis declaradas dentro de funções não são acessadas fora das mesmas

// function mostrarCarro() {
//     var carro = 'Fusca';
//     console.log(carro)
// }

// mostrarCarro() //fusca no console
//console.log(carro); //erro, carro is not defined

//Escopo evita o conflito entre nomes

//Variável Global (Erro)

//Declarar variavéis sem a palavra chave var, const ou let, cria
//uma variável que pode ser acessada em qualquer escopo(global)
//Isso é um erro.
// 'use strict'
// var carro = 'Fusca';

// function mostrarCarro() {
//     console.log(carro);
// }

// mostrarCarro(); //Fusca no console
// console.log(carro);//Erro, carro is not defined

//'use strict' impede isso

//Escopo de função(Pai)

//Variáveis declaradas no escopo pai da função,
// conseguem ser acessadas pelas funções.

// var carro = 'Fusca';

// function mostrarCarro() {
//     var frase = `Meu carro é um ${carro}`;
//     console.log(frase);
// }

// mostrarCarro(); //Meu carro é um fusca
// console.log(carro); //Fusca

//Escopo de bloco

/* Variáveis criadas com var, vazam o bloco. Por isso com a
introdução do ES6 a melhor forma de declarmos uma variável é
utilizando const e let, pois estas respeitam o escopo de bloco */

// if(true){
//     var carro = 'Fusca';
//     console.log(carro);
// }


// console.log(carro) // vai aparecer se for declarada com var dentro do if, com let vai dar erro

//Var vaza o bloco

//mesmo com a condição falsa, a variável ainda será declarada
//utilizando hoisting e o valor ficará como undefined

// if(false){
//     var carro = 'Fusca';
//     console.log(carro);
// }

// console.log(carro)

//Const e let no lugar de var

// A partir de agora vamos utiliazr apenas const e let para
//declarmos variáveis

if(true){
    var carro = 'Fusca'
    const ano = 2018
}

console.log(carro); //Carro
//console.log(ano); //erro ano is not defined

//{} cria um bloco

//Chaves {} criam um escopo de bloco, não confundir com a criação
//de objetos = {}

{
    var carro = 'Fusca';
    const ano = 2018;
}

//For loop

//Ao utilizar var dentro de um for loop, que é um bloco, o valor
//da variável utilizada irá vazar e existir fora do loop.
var i = 50

for(let i = 0; i < 10; i++) {
    console.log(`Número ${i}`)
}
console.log(i); //10, ao colocar o var i fora, mostrará o 50

//Const

//Mantém o escopo no bloco, impede a redeclaração e impede a modificação
//do valor da variável, evitando bugs no código

// const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor

 const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
}

// data.dia = 29; //Funciona
// data = 'Janeiro'; //erro

//consegue-se mudar um método do objeto dentro de uma variavel const,
//mas nao conseguimos mudar a variavel const em si, mesmo sendo um objeto
//Variáveis com valores constantes não mudam seus valores

//Let

//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação
//do valor da variável

let ano;
ano = 2018;
ano++
console.log(ano); //2019

//let ano = 2020; //erro, redeclarou a variável

//Geralmente vamos utilizar o const