//Exercicio

//Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handledLink(event){
    event.preventDefault();
    linksInternos.forEach((link)=>{
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handledLink);
})


//Selecione todos os elementos do site começando a partir do body e ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento)
})

//Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove()  remove um elemento

// function remove(event){
//     event.currentTarget.remove();
// }

// todosElementos.forEach((elemento)=>{
//     elemento.addEventListener('click', remove)
// })

//Se o usuário clicar na tecla(t), aumente todo o texto do site.

function aumentar(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('texto-maior')
    }
}

window.addEventListener('keydown', aumentar)
