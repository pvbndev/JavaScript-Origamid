var idade = 28;
var gols = 1000;
var pi = 3.14;
var exponencial = 2e25;

//operadores aritimeticos

var total = 10 + 3 + 10;
var divisao = 200 / 5;
var modulo = 3e10 % 26;

console.log(modulo);

// operadores aritimeticos ( strings )

var soma = '100' + 50 // 10050
var subtracao = '100' - 50 // 50
var multiplicacao = '100 ' * '2' // 200
var divisao = 'Comprei 10' / 2; // NaN(Not a Number)

//é possivel verificar se uma variavel é NaN ou não com isNaN()

console.log(isNaN(divisao))

// a ordem importa

//começa por multiplicação e divisão, depois soma e subtração

//(parênteses para priorizar uma expressão)

var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2;//40

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10

// operadores aritmeticos unarios - pois apenas diminuem ou aumentam em 1

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6
var decremento = 4;
console.log(decremento--); //4
console.log(decremento) // 3

var frase = 'Isso é um teste';
+frase; // NaN
-frase; //NaN

var idade = +'28';
+idade; //28(numero)
-idade; //-28(numero)
var somaIdade = -5
console.log(idade + somaIdade) //33, pois por ultimo ficou -idade, que é -28, e -28 + -5 dá 33, pois - com - dá +

var possuiFaculdade = true;
console.log(possuiFaculdade++)
// vai dar um, e depois dois, pois true é igual a 1, assim como false é 0, se declarar como false, vai para 1


// se criar const com incremento, vai dar erro pois nao pode modificar constante

