//Seleçao de elementos no DOM

//ID

//getElementById seleciona e retorna elementos do DOM

//Seleciona pelo ID

const animaisSection = document.getElementById('animais');
//const contatoSection = document.getElementById('contato');

//retorna null caso não exista

const naoExiste = document.getElementById('teste');

//Classe e Tag

//getElementsbyClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A Lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

//Seleciona pela classe, retorna uma HTMLCollection

//const gridSection = document.getElementsByClassName('grid-section');
const contatoSection = document.getElementsByClassName('grid-section contato')

//Seleciona todos os UL's, retorna uma HTMLCollection

const ul = document.getElementsByTagName('ul');

//retorna o primeiro elemento
//console.log(gridSection[0])

//Seletor Geral Único

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

//Busca dentro do Ul apenas

const primeiroLi = primeiroUl.querySelector('li');

const linksInternos = document.querySelector('[href^="#"]')

//Seletor Geral Lista

//querySelectorAll retorna todos os elementos compátiveis com o seletor Css em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img')

//retorna o segundo elemento
console.log(gridSection[1])

console.log(fotosAnimais)

//HTMLCollection vs NodeList

//a diferença está nos métodos e propriedades de ambas. Além disso a Node List retornada com querySelectorAll é estática.

const titulo = document.querySelectorAll('.titulo')
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiroUl.classList.add('grid-section')

console.log(gridSectionHTML); //4 itens
console.log(gridSectionNode); //3 itens

//Array-Like

//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método do Array forEach() por exemplo, existe apenas em NodeList.

gridSectionNode.forEach(function(item, index, array){
    item.classList.add('azul');
    console.log(index); //index no item na array
    console.log(array); //array completa
});

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item)
});