let fortune = [    
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Siga os bons e aprenda com eles.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Uma bela flor é incompleta sem as suas folhas."
]

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const fortuneContainer = document.querySelector('.fortune')
const btnFortune = document.querySelector('form button');
const btnOpenAgain = document.querySelector('.open-again');

document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        toggleScreen()
    }
})

btnFortune.addEventListener('click', (event) => {
    event.preventDefault()

    toggleScreen()
})

btnOpenAgain.addEventListener('click', toggleScreen)


function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');

    getLucky()
}

function getLucky() {
    randomFortune = randomNumber()
    fortuneContainer.textContent = fortune[randomFortune]
}

function randomNumber() {
    randomFortune = Math.floor( Math.random()*21 );
    return randomFortune
}