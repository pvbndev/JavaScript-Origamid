// //boolean - false ou true
// var possuiGraduacao = true;
// var possuiDoutorado = false;

// //condicionais if e else

// if(possuiGraduacao) {
//   console.log('Possui graduação');
// } else {
//   console.log('Não possui graduação')
// }
//retorna Possui graduação e naão executa o else

//O valor dentro dos parênteses sempre será avaliado em false ou true

// // var possuiGraduacao = true;
// // var possuiDoutorado = true;

// // if(possuiDoutorado && possuiGraduacao) {
// //   console.log('Possui graduação e doutorado')
// // } else if(possuiGraduacao) {
// //   console.log('Possui graduação')
// // } else if(possuiDoutorado) {
// //   console.log('Possui doutorado')
// // } else {
// //   console.log('Possui nenhum dos dois')
// // }

//truthy e falsy - existem valores que retornam true e outros que retornam false quando verificamos em uma expressao booleana

//Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('')// ou "" ou ``

//todo o resto é truthy

// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

//operador lógico de negação
//!
//o operador !, nega uma operação booleana. Ou seja !true é false

//truthy
// if(!true) //false
// if(!1)// false
// if(!'')//true
// if(!undefined)//true
// if(!!' ')//true
// if(!!'')//false

//dica, você pode utilizar o !! para verificar se uma expressão é truthy ou falsy

//Operadores de comparação

//Vão sempre retornar um valor booleano

// 10 > 5 // true
// 5 > 10 //false
// 20 < 10 //false
// 10 <= 10 //true
// 10 >= 11 //false

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

// 10 == '10'//true
// 10 == 10//true
// 10 === '10'//false
// 10 === 10//true
// 10 != 15 //true
// 10 != '10'//false
// 10 !== '10' //true

//operadores lógicos &&

//&& compara se uma expressão e a outra é verdadeira, && é a mesma coisa de e

// true && true; // true
// true && false // false
// false && true //false
// 'Gato' && 'Cão'; //'Cão'
// (5 - 5) && (5 + 5);//0
// 'Gato' && false // false
// (5 >= 5) && (3 < 6) //true

//Se ambos os valores forem true, ele irá retornar o ultimo valor verificado, se algum valor for false ele irá retorna o mesmo[false], no caso o que é valor false, e não irá continuar a verificar os próximos

// if(5 >= 5 && 4 - 6) {
//     console.log('verdadeiro')
//    } else {
//     console.log('é falso')
//   }

// operador lógico ||

// || compara se uma expressão ou outra é verdadeira

// true || true; // true
// true || false // true
// false || true //true
// 'Gato' || 'Cão'; //'Gato'
// (5 - 5) || (5 + 5);//10
// 'Gato' || false // Gato
// (5 >= 5) || (3 < 6) //true

//Retorna o primeiro valor true que encontrar

// var condicional12 = (5 - 5) || (5+5) || ( 10 - 2 ); //vai dar 10
// var condicional12 = (5 - 5) && (5+5) || ( 10 - 2 ); // vai dar 8
//var condicional12 = (5 - 5) || (5+5) && ( 10 - 2 ); // vai dar 8
// var condicional12 = (5 - 5) && (5+5) && ( 10 - 2 ); // vai dar 0
// console.log(condicional12) // caso coloque o || em tudo, retornaá 10, pois foi a primeira true da linha, ja se colocar o && em ultimo ou no primeiro por exemplo, irá retorna 8, pois é a ultima true do código

//switch

//com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor default ocorrerá caso nenhuma das anteriores seja verdadeira

// var corFavorita = '';

// switch(corFavorita) {
//   case 'Azul':
//     console.log('Olhe para o céu');
//     break;
//   case 'vermelho':
//     console.log('Olhe para rosas.')
//     break;
//   case 'Amarelo':
//     console.log('Olhe para o sol')
//     break;
//  case 'Verde':
//    console.log('Olhe para a floresta')
//    break;
//   default:
//     console.log('Olhe para frente')
//     break;
// }