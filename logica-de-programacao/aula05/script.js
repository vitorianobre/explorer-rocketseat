/*
    Capture 10 itens para compor a lista de um supermercado.

    Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let items = [];

for (let item = 0; item < 10; item++) {
    items[item] = prompt("Digite o item " + (item + 1));
}

alert(items);