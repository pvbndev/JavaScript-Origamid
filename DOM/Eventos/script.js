//Exercicio

//Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

function links (event) {
    const href = document.querySelectorAll('a[href=^"http"]');
    href.classList.toogle('ativo');
}

//1:34:30