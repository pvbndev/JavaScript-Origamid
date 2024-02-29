//Document Object Model (DOM)

// É uma interface que representa documentos HTML e XML através
// de objetos. Com ela é possível manipular a estrutura, estilo
// e conteúdo destes documentos

console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// Ao inspecionar elemento com o Chrome, você está vendo a 
// representação oficial do DOM

const href = window.location.href; // armazena o endereço do site em uma variavel

//DOM

/*Primeiro - window
Segundo - Location, Document, ...(diversos outros objetos, metodos e propriedades linkadas ao window)
Terceiro, logo após o Document - <html>
Quarto, após o <html> - <head>, <body>
Quinto, logo após o <body> - <h1>, <section>
Sexto, logo após o <section> - <h2> e <p>
*/

const h1Selecionado = document.querySelector('h1');

//querySelector serve para selecionar uma tag, classe ou id

//Window e Document

//São os objetos principais do DOM, boa parte da manipulação é feita
//através dos seus métodos e propriedades.

//window.alert('Isso é um alerta');
// alert('Isso é um alerta'); //Funciona

document.querySelector('h1'); //Seleciona o primeiro h1
document.body; //Retorna o body

//window é o objeto global, por isso não precisamos chamar ele
//na frente dos seus métodos e propriedades

//Node

//Toda tag html é representada pelo objeto Element e por isso
//herda os seus métodos e propriedades. Element é um tipo de objeto Node

const titulo = document.querySelector('h1');

titulo.innerText; //retorna o texto
titulo.classList; //retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; //retorna a altura do elemento

const h1Classes = h1Selecionado.classList

function callbackh1(){
    console.log('Clicou em ', h1Selecionado.innerText)
};

h1Selecionado.addEventListener('click', callbackh1)
//ativa a função callback ao click no titulo

//