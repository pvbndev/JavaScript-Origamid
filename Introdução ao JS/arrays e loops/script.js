//Arrays e loops

//Array

//É um grupo de valores geralmente relacionados. Servem para
//guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0]; //Switch
videoGames[2]//Xbox

//Acesse um elemento do array utilizando [n]

//Métodos e propriedades de uma Array

var ultimoItem = videoGames.pop();//Remove o último item e retorna ele
videoGames.push('3DS');//Adiciona ao final do array
videoGames.length; //3


//Existem diversos outros métodos, como map, reduce, forEach 
//e mais que veremos mais à frente

//For loop

//Fazem algo repetiddamente até que uma condição seja atingida

//   for (var numero = 0; numero <= 10; numero++){
//       console.log(numero)
//  }

//o for lop possui 3 partes, 1.inicio, 2. condição e 3.incremento

//While loop

// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// var i2 = 0;
// while (i2 <= 10) {
//     console.log(i2);
//     i = i + 5; //ele tá fazendo um loop de 5 em 5
// }

// o for loop é o mais comum

// o i é mais utilizado em loop, pois é tipo index
 
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
}

//item é igual a 0, enquanto item for menor 
//o tamanho do array videoGames[mudado para 5], incremente em 1
//irá exibir tudo e undefined no final, se colocar 4, irá exibir tudo

//Break

//O loop irá parar caso encontre a palavra break
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break
    }
}

// forEach

// forEach é um método que executa uma função para cada item da Array.
//É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
var frutas = ['Banana', 'Maçã', 'Pera', 'Laranja' ]
frutas.forEach(function(item){
    console.log(item);
})
frutas.forEach(function(item){
    frutas.pop();
    console.log(frutas);
})

//o argumento item virá o array videoGames ou frutas
//O argumento item será distribuido dinamicamente

//Podemos passar os seguintes parâmetros item, index(0,2,3) e array(é a array inteira) 

//Não se condunda com a sintaxe

var numero = 0;
var maximo = 50

/*for(;numero < maximo;) {
    console.log(numero);
    numero++
} */

//Não aconselho escrever da forma acima, mas funciona normalmente