//O callback é uma função que se passa como parâmetro para outra função
//Essa função é responsável por executar a função recebida quando for necessário
//Tipos de callbacks - definida
const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)
//Função pai


console.log(calculadora(10, 20, somar)) //Retorna 30
// A função somar não recebe parâmetro "()"
// Quando colocamos um parâmetro "()", o JavaScript entende que é pra executar
// Como isso é um callback, quem executa é a função pai

//Tipos de callbacks - anonima
console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA-numeroB))
// Quando uma função callback é anônima, precisamos escrevê-la dentro da chamada da função callback
