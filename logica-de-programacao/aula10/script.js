/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo do IMC
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

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC (patient) {
    return `
        Paciente ${patient.name} possui o IMC de
        ${IMC(patient.weight, patient.height)}
    `
}


for (let patient of patients) {
    alert(printPatientIMC(patient))
}
