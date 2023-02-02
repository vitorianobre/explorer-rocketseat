export class Pages {
    showConvert() {
        fetch("/pages/convert.html")
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
    showPrice() {
        fetch("/pages/price.html")
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
    showQuery() {
        fetch("/pages/query.html")
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}