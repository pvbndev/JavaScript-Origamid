

//Height e Width

//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; //heigth + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth...

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;

//offsetTop e offsetLeft

const animaisTop = listaAnimais.offsetTop;

//Distância entre o topo do elemento e o topo da página

section.offsetTop;

//Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section.offsetLeft;

//getBoundingClientRect()

//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

const primeiroh2 = document.querySelector('h2');

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top)

// console.log(rectVideo);

// console.log(rectVideo.left);

// console.log(rectVideo.height);

//Window

window.innerHeight; // height da janela
window.innerWidth; // width da janela
window.outerHeight; // soma devtools também
window.outerWidth; // soma a barra de endereço

window.pageYOffset; //distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

console.log(window.innerHeight,
    window.innerWidth,
    window.outerHeight,
    window.outerWidth);

console.log(window.pageYOffset,
    window.pageXOffset)

// if(rectVideo.top < 0){
//     console.log('passou do elemento')
// }

// if(window.innerHeight < 600){
//     console.log('Tela menor que 600px');
// }


//matchMedia();

//utilize um media-querie como no css para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

console.log(small)

//matches - bate ou igual

if(small.matches) {
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}

//Dica 

/*Selecione o elemento no inspetor(dom)
Abra o console e digite $0 para selecionar o mesmo
Os elementos selecionados anteriormente são $1, $2... */

//Exercic