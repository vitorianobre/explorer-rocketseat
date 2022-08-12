/*
    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = Number(prompt('Digite o primeiro número:'));
let numberTwo = Number(prompt('Digite o segundo número:'));

let operationsArray = [];

function operations (numberOne, numberTwo, array) {
    array.push(`A soma dos dois números é: ${numberOne + numberTwo}`)
    array.push(`A subtração dos dois números é: ${numberOne - numberTwo}`)
    array.push(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
    array.push(`A divisão dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`)
    array.push(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)
}

function verifyNumbers (numberOne, numberTwo) {
    if ((numberOne+numberTwo)%2 == 0) {
        alert(`A soma de ${numberOne} e ${numberTwo} é par.`)
    } else {
        alert(`A soma de ${numberOne} e ${numberTwo} é ímpar.`)
    }

    if (numberOne == numberTwo) {
        alert(`Os números ${numberOne} e ${numberTwo} são iguais.`)
    } else {
        alert(`Os números ${numberOne} e ${numberTwo} são diferentes.`)
    }
}

operations(numberOne, numberTwo, operationsArray)

for (let operation of operationsArray) {
    alert(operation)
}

verifyNumbers(numberOne, numberTwo)
