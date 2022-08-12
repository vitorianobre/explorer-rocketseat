/*
    Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const studentsList = [
    {
        name: 'João',
        firstTest: 7,
        secondTest: 10
    },
    {
        name: 'Letícia',
        firstTest: 3,
        secondTest: 8
    },
    {
        name: 'Diego',
        firstTest: 5,
        secondTest: 6
    },
    {
        name: 'Júlia',
        firstTest: 8,
        secondTest: 9
    },
]

function average (gradeOne, gradeTwo) {
    return (gradeOne + gradeTwo) / 2
}

for (let student of studentsList) {
    let media = average(student.firstTest, student.secondTest)

    if (media > 7) {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${media}.
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${media}.
       Não foi dessa vez, ${student.name}! Tente novamente!
        `)
    }
}
