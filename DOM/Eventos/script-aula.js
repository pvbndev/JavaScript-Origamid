//Eventos

//addEventListener

//adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

// const img = document.querySelector('img');

// //elemento.addEventListener(event, callback, options)

// img.addEventListener('click', function(){
//     console.log('clicou');
// })

//o terceiro parâmetro é opcional

//Callback

//É uma boa prática separar a função callback do addEventListener, ou seja, declarar uma funçã ao invés de passar diretamente uma função anônima

// function callback(){
//     console.log('Clicou');
// }

// img.addEventListener('click', callback); //*emoji de foguetelol*
// img.addEventListener('click', callback()); //undefined
// img.addEventListener('click', function(){
//     console.log('clicou')
// })
// img.addEventListener('click', ()=> {
//     console.log('clicou')
// });

//Event

//O primeiro parâmetro do callback é referente ao evento que ocorreu

// function callback(event){
//     console.log(event)
// }

// img.addEventListener('clicou', callback)

// //Geralmente utilizam e como nome do parâmetro

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event){
//     console.log(event.currentTarget);//mostra a ul
//     console.log(event.target); // vai mostrar a imagem em especifica clicada
// }

// animaisLista.addEventListener('click', callbackLista);

// //Propriedades do Event

// function executarCallback(event){
//     const currentTarget = event.currentTarget; // this
//     const target = event.target; // onde o clique ocorreu
//     const type = event.type; // tipo de evento
//     const path = event.path; // caminho
//     console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback)

// //event.preventDefault()

// //previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//     event.preventDefault();
//     console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);

// //this

// /*A palavra chave this é uma palavra especial de JavaScript que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. */

// function callback(event){
//     console.log(this); //retorna a imagem
//     console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);

// //Geralmente igual ao event.currentTarget

//Diferentes eventos

//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseeenter e mais. Eventos podem ser adicionados a diferentes elementos como, window e document também

// const h1 = document.querySelector('h1');

// function callback(event){
//     console.log(event.type, event)
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);

//Keyboard

//Você pode adicionar atalhos para facilitar a navegação no seu site através de eventos keyboard

// function handleKeyboard(event) {
//     if(event.key === 'a'){
//         document.body.classList.toggle('azul');
//     }
// }


// window.addEventListener('keydown', handleKeyboard);

// forEach e Eventos

// O métodos addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src)
}

function handleEvent (event) {
    console.log(event.currentTarget)
}

imgs.forEach((img) => {
    img.addEventListener('click', handleEvent)
})