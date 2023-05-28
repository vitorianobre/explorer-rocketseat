const selectFrom = document.querySelector('#coin-from');
const labelSelectFrom = document.querySelector('.from span');
selectFrom.addEventListener('change', () => labelSelectFrom.textContent = selectFrom.value)

const selectTo = document.querySelector('#coin-to');
const labelSelectTo = document.querySelector('.to span');
selectTo.addEventListener('change', () => labelSelectTo.textContent = selectTo.value)

document.querySelector('#from-date').max = new Date().toISOString().split("T")[0];
document.querySelector('#until-date').max = new Date().toISOString().split("T")[0];

const btnConvert = document.querySelector('#submit');

btnConvert.addEventListener('click', () => {
    const optionFrom = selectFrom.children[selectFrom.selectedIndex].textContent;
    const optionTo = selectTo.children[selectTo.selectedIndex].textContent;

    const min = document.querySelectorAll('.info-wrapper .min span').item(1);
    const max = document.querySelectorAll('.info-wrapper .max span').item(1);
    const variation = document.querySelectorAll('.info-wrapper .variation span').item(1);
    const percentage = document.querySelectorAll('.info-wrapper .percentage span').item(1);

    if (optionFrom == optionTo) {
        min.textContent = "-";
        max.textContent = "-";
        variation.textContent = "-";
        percentage.textContent = "-";
        return alert('Moeda inválida')
    }

    var dateFrom = document.querySelector('#from-date').value;
    var dateTo = document.querySelector('#until-date').value;
    
    if (dateFrom >= dateTo || dateTo == "") {
        min.textContent = "-";
        max.textContent = "-";
        variation.textContent = "-";
        percentage.textContent = "-";
        return alert('Data inválida')
    }

    dateFrom = dateFrom.replace(/-/g, "");
    dateTo = dateTo.replace(/-/g, "");

    const endpoint = `https://economia.awesomeapi.com.br/json/daily/${optionFrom}-${optionTo}/?start_date=${dateFrom}&end_date=${dateTo}`;

    fetch(endpoint)
    .then(data => data.json())
    .then(response => Object.values(response)[0])
    .then(({high, low, varBid, pctChange, codein}) => {
        min.textContent = `${low} ${codein}`;
        max.textContent = `${high} ${codein}`;
        variation.textContent = varBid;
        percentage.textContent = `${pctChange}%`
    })
})