//classList

//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; //string
menu.classList; //lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo');

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
} else {
    menu.classList.toggle('nao-possui-azul');
}

//concatenar strings

menu.className = `${menu.className} vermelho`
menu.className += 'vermelho';

//attributes

//Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; //retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

console.log(animais)
console.log(animais.attributes);
console.log(animais.attributes[1]);
console.log(animais.attributes.class);

console.log(animais.attributes['data-texto']);

//getAttribute e setAttribute

//Métodos que retornam ou definem de acordo com o atributo selecionado

var img = document.querySelector('img');

imgSrc = img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt, dá pra colocar coisas que não existem, o alt significa o atributo, e o texto alternativo oque está escrito dentro deste atributo
console.log(img.hasAttribute('id')); // true / false
img.removeAttribute('alt'); // remove o alt
console.log(imgSrc)
possuiAlt = img.hasAttribute('alt'); // true / false se tem algum atributo

console.log(possuiAlt)
// É muito comum métodos de get e set;

//ReadOnly vs Writable

animais.classList; // string com o nome das classes
animais.className = 'azul'; //substitui completamente a string
animais.className = ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

//Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// exercicio

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(item => {
    item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
})

// Modifique o href do link externo no menu

const hrefExterno = document.querySelector('a[href^="http"]');

hrefExterno.setAttribute('href', 'https://google.com');

console.log(hrefExterno);

