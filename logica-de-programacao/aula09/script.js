/*
    Crie uma lista de pacientes

    Cada paciente deverá conter
        nome
        idade
        peso
        altura
    
    Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos
*/

const patients = [
    {
        name: "Maria",
        age: 17,
        weight: 58,
        height: 166
    },
    {
        name: "João",
        age: 26,
        weight: 87,
        height: 183
    },
    {
        name: "Pedro",
        age: 32,
        weight: 110,
        height: 190
    },
]

let patientsNames = [];

for (let patient of patients) {
    patientsNames.push(patient.name)
}

alert(patientsNames)

// Desafio complementar

for (let patient of patients) {
    alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem altura de ${patient.height}cm`)
}
