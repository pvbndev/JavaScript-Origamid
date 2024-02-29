//Tudo é objeto
//Strings, números, boolean, objetos e mais, possuem propriedades
//e métodos. Por isso são objetos.

var nome = 'André'

nome.length; //5
nome.charAt(1); //'n'
nome.replace('ré', 'rei') // 'Andrei'
nome; //'André'
nome.toLowerCase(); // deixar tudo em minúsulo
nome.toUpperCase(); //deixar tudo em maisculo
//Uma string herda propriedades e métodos do construtuor:
// String()

//Números

var altura = 1.8;
altura.toString(); //'1.8'
altura.toFixed(); //'2'

//Por um breve momento o número é envolvido em um objeto
//(coerção), tendo acesso assim as suas propriedades e métodos

//Funções

function areaQuadrado(lado){
    return lado * lado;
}

areaQuadrado.toString();
/*"function areaQuadrado(lado){
    return lado * lado;
}"*/

areaQuadrado.length; // retorna quantos parametros ela tem, no caso só um: 1

//addEventListener.length;, vai dar 2 pois possui dois argumentos

//ELEMENTOS DO DOM

var btn = document.querySelector('.btn') //o argumento que passa dentro do querySelector() é um argumento css, que no caso é a classe .btn

btn.classList.add('azul'); //adiciona a classe azul
btn.innerText; //'Clique'
btn.addEventListener('click', function(){
    console.log('Clicou')
})

btn.classList; //listar as classes, vai listar a btn e o azul, pois o azul adicionamos com btn.classList.add

//Praticamente todos os efeitos com JS são feitos utilizando
//propriedades e métodos de objetos do DOM

//Objetos revolucionaram a programação

//Web API's são métodos e propriedades que permitem a interação JS e Browser
