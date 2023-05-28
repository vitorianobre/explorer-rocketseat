const selectFrom = document.querySelector('#coin-from');
const labelSelectFrom = document.querySelector('.from .coin-wrapper span');
selectFrom.addEventListener('change', () => labelSelectFrom.textContent = selectFrom.value)

const selectTo = document.querySelector('#coin-to');
const labelSelectTo = document.querySelector('.to .coin-wrapper span');
selectTo.addEventListener('change', () => labelSelectTo.textContent = selectTo.value)

const btnConvert = document.querySelector('#submit');

btnConvert.addEventListener('click', () => {
    const optionFrom = selectFrom.children[selectFrom.selectedIndex].textContent;
    const optionTo = selectTo.children[selectTo.selectedIndex].textContent;
    const price = document.querySelector('.price-wrapper span.price');
    const inputValue = document.querySelector('.input-wrapper input');
    const priceValue = document.querySelector('.value-wrapper span');

    const endpoint = `https://economia.awesomeapi.com.br/last/${optionFrom}-${optionTo}`;

    fetch(endpoint)
    .then(data => data.json())
    .then(response => Object.values(response)[0])
    .then(({bid, codein}) => {
        price.textContent = `${bid} ${codein}`
        priceValue.textContent = (inputValue.value * bid).toFixed(2)
    })

})