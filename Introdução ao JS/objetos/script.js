//Objetos

//Conjunto de variáveis e funções, que são chamadas 
// de propriedades e métodos

var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
}

pessoa.nome; //'André'
pessoa.possuiFaculdade; // true
//Propriedades e métodos consistem em nome (chave)
// e valor

//Métodos

//É uma propriedade que possui uma função no local do seu valor

var quadrado1 = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado; //
        //pode-se usar lado + lado + lado + lado, mas é mais prático usar
        //this faz referencia a isto, que faz referencia ao [proprio]objeto em si, ou seja
        //o this vai estar referenciando o quadrado, coloca this.lados, pois seria como quadrado.lados, mas sem declarar denovo
        //a variavel
    }
}
quadrado1.lados; //4
quadrado1.area(5); // 25
quadrado1.perimetro(5); //20
//abreviação de area: function() {} para area() {} no ES6+
var quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado; //
        //pode-se usar lado + lado + lado + lado, mas é mais prático usar
        //this faz referencia a isto, que faz referencia ao [proprio]objeto em si, ou seja
        //o this vai estar referenciando o quadrado, coloca this.lados, pois seria como quadrado.lados, mas sem declarar denovo
        //a variavel
    }
}
quadrado2.area(23)
quadrado2.perimetro(10)

//Organizar o código

/* Objetos servem para organizar o código em pequenas partes
reutilizáveis */

Math.PI; //3.14
Math.random(); // número aleatório;

var pi = Math.PI;
console.log(pi); //3.14

/* Math é um objeto nativo do JavaScript.
Já percebeu que console é um objeto e log() um método?*/

//console é um objeto nativo do browser
//.log() é um método para mostrar no console

console.table(quadrado1) // criar uma tabela no console

//Criar um objeto

//Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro) // 'object'

// Do Notation Set
//Acesse propriedades de um objeto utilizando o ponto .
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000'

menu.color = 'blue';
menu.esconder = () => {
    console.log('Escondi')
}
var bg = menu.backgroundColor; //'#84E', agora depois de colocar o ultimo comando será '#000'

//Adicionar Propriedades e Métodos

//Basta adicionar um novo nome e definir o valor.

var menu = {
    width: 800,
}

menu.height = 50;
menu.position = 'fixed';

//Palavra This

//this irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#FFF',
    metadeHeight() {
        return this.height / 2
    }
}
//this tambem pega variaveis fora do objeto, exemplo this.height
menu.metadeHeight(); //25
//sem o this, seria 60

//this irá retornar o próprio objeto

//Protótipo e Herança

//O objeto herda propriedades e metódos do objeto que foi
//utilizado para criar o mesmo.

var menu = {
    width:800,
}

menu.hasOwnProperty('width'); //true
menu.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object, que diz 
//se a propriedade está no objeto

//contar caracteres: .length

//exemplo 'Pedro'.length vai dar 5