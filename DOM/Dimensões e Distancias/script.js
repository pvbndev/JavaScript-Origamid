//Exercicio

//Verifique a distância da primeira imagem em relação ao topo da página

const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

//Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem)=>{
        const largura = imagem.offsetWidth;
        soma = soma + largura;
    })
    console.log(soma)
}
window.onload = function() {
    somaImagens();
}

/* Verifique se os links da página possuem o mínimo 
recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google)*/

const links = document.querySelectorAll('a');

links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth < 48 && linkHeight < 48){
        console.log(link, 'Não está de acordo com o minimo recomendado: 48px')
    } else {
        console.log(link, 'Está de acordo com o recomendado: 48px')
    }
})

//Se o browser for menor que 728px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
} else {
    console.log(window.innerHeight, window.innerWidth)
}

//minha solução
// if(window.innerHeight + window.innerWidth < 728){
//     const menu = document.querySelector('nav');
//     menu.classList.add('menu-mobile')
// } else {
//     console.log('Acima de 728px')
// }