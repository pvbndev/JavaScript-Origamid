//TIPOS DE DADOS

// são 7 tipos de dados


var nome = 'André'; //string
var idade = 28; // number
var possuiFaculdade = true; // boolean
var time; //undefined
var comida = null; // null
var simbolo = Symbol(); // symbol
var novoObjeto = {}; // object

console.log(typeof time);

//Verificar tipo de dado

/* utiliza-se typeof()*/

/* String */

var nome = 'André';
var sobrenome = 'Felipe';
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto) // AndréFelipe

var gols = 1000;
var frase = 'Rómario fez ' + gols + ' gols';
console.log(typeof frase) //string

var ano = 2018;
var mes = 8;
console.log(ano + mes);//2026

/* Aspas duplas, simples e template string */
var melhor = 'teste'; //simples
var frase1 = "Esse é o\"melhor\"jogo"; //duplas
var frase2 = `Romário fez ${gols} gols`; //template string
console.log(frase2);
