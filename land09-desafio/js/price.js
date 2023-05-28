const selectFrom = document.querySelector('#coin-from');
const labelSelectFrom = document.querySelector('.from span');
selectFrom.addEventListener('change', () => labelSelectFrom.textContent = selectFrom.value)

const selectTo = document.querySelector('#coin-to');
const labelSelectTo = document.querySelector('.to span');
selectTo.addEventListener('change', () => labelSelectTo.textContent = selectTo.value)

const btnConvert = document.querySelector('#submit');

btnConvert.addEventListener('click', () => {
    const optionFrom = selectFrom.children[selectFrom.selectedIndex].textContent;
    const optionTo = selectTo.children[selectTo.selectedIndex].textContent;

    const price = document.querySelectorAll('.info-wrapper .price span').item(1);
    const min = document.querySelectorAll('.info-wrapper .min span').item(1);
    const max = document.querySelectorAll('.info-wrapper .max span').item(1);
    const variation = document.querySelectorAll('.info-wrapper .variation span').item(1);
    const percentage = document.querySelectorAll('.info-wrapper .percentage span').item(1);

    if (optionFrom == optionTo) {
        price.textContent = "-";
        min.textContent = "-";
        max.textContent = "-";
        variation.textContent = "-";
        percentage.textContent = "-";
        return alert('Moeda inválida')
    }

    const endpoint = `https://economia.awesomeapi.com.br/last/${optionFrom}-${optionTo}`;

    fetch(endpoint)
    .then(data => data.json())
    .then(response => Object.values(response)[0])
    .then(({high, low, varBid, pctChange, bid, codein}) => {
        price.textContent = `${bid} ${codein}`;
        min.textContent = `${low} ${codein}`;
        max.textContent = `${high} ${codein}`;
        variation.textContent = varBid;
        percentage.textContent = `${pctChange}%`
    })

})