// //outerHTML, innerHTML e innerText

// //Propriedades que retornar uma string contendo o html ou texto. É possível atribuit um novo valor para as mesmas element.innerText = 'Novo Texto'

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// //.innerText = '<p>Texto</p>' // a tag vai com texto
// //.innerHTML = '<p>Texto</p>' // a tag é renderizada

// //Transversing

// //Como navegar pelo DOM, utilizando suas propriedades e métodos.

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; //pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; //HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; //último filho

// lista.querySelectorAll('li'); // todos os LI's

// lista.querySelector('li:last-child'); // último filho

// //Element vs Node

// //Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento(element), texto, comentário, quebra de linha e mais

// lista.previousElementSibling; // elemento acima
// lista.nextSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os nodes child

// //Geralmente estamos atrás de um elemento e não de qualquer node em si

// //Manipulando Elementos

// //É possível mover elementos no dom com métodos de Node

// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const faq = document.querySelector('.faq')
// const animais_Descricao = document.querySelector('.animais-descricao');
// //contato.appendChild(faq); // move faq para o final de contato
// contato.insertBefore(lista, titulo); //insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// //contato.replaceChild(lista, titulo); // substitui titulo por lista

// //Novos Elementos

// //Podemos criar novos elementos com o método createElement()

// const animais = document.querySelector('.animais');
// const mapa = document.querySelector('.mapa');

// const novoH1 = document.createElement('h1'); // cria um novo h1
// novoH1.innerText = 'Novo título'; // coloca Novo titulo dentro do h1
// novoH1.classList.add('titulo'); // adiciona a classe titulo para o novoH1

// animais.appendChild(novoH1); // move o novoH1 para o fim de animais

//Clonar Elementos
// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// // titulo, titulo2 e novoTitulo são iguais

// const faq = document.querySelector('.faq');
// const cloneH1 = titulo.cloneNode(true)
// const contato = document.querySelector('.contato');

// cloneH1.classList.add('azul');
// contato.appendChild(cloneH1);
//faq.appendChild(titulo)
//contato.appendChild(cloneTitulo);

//true sinaliza para incluir os filhos

//Exercicio

//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

//Selecione o primeiro DT da Dl em faq

const faq_lista = document.querySelector('.faq-lista')

const dt = faq_lista.querySelector('dt');

//Selecione o DD ferente ao primeiro DT

const dd = dt.nextElementSibling;

//Substitua o conteúdo html de .faq pelo de . animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');


faq.innerHTML = animais.innerHTML; // muda o conteudo, mas não passa a estilização

