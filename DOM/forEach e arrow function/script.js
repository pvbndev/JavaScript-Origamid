//forEach 

//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
    console.log(item)
})

// let i = 0;

// imgs.forEach(() => {
//     console.log(i++)
// })

// a cada imagem ele rodará o código, aumentando o 0 para 1, 2 e etc

//Parâmetros do forEach

//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array:

imgs.forEach(function(item, index,array){
    console.log(item); // o item atual no loop;
   console.log(index); // o número do index
    console.log(array); // o Array Completo
});

//forReach e Array

//forReach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);//no from passamos um titulo que parece um array, para transformar

console.log(titulosArray);

titulosArray.forEach(function(item){
    console.log(item)
})

//Arrow Function

//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicioanr a fat arrow => após os argumentos

imgs.forEach((item) =>{
    console.log(item);
})

//Argumentos e Parênteses

/* argumento único não precisa de parênteses */

imgs.forEach(item => {
    console.log(item);
})

// multiplos argumentos precisam de parênteses

imgs.forEach((item,index) => {
    console.log(item,index)
})

// sem argumentos precisa dos parênteses, mesmo vazio
// let i = 0;
// imgs.forEach((item) => {
//     console.log(i++);
//     console.log(item);
// });

//Return

//É possível omitir as chaves {} para uma função que retorna uma linha.

imgs.forEach(item => 
    console.log(item)
);

imgs.forEach(item => console.log(item));

//Mostre no console cada parágafo do site

let p = document.querySelectorAll('p');

p.forEach(item => {
    console.log(item)
});

//Mostre o texto dos parágrafos no console

p.forEach((item) => {
    console.log(item.innerText);

});

// Como corrigir os erros abaixo:

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;

imgs.forEach(() => {
    console.log(i++)
});

imgs.forEach(() => console.log(i++)); 