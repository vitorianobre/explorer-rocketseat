import { Pages } from "./Pages.js";

const pages = new Pages;
const btnConvert = document.querySelector('#convert');
const btnPrice = document.querySelector('#price');
const btnQuery = document.querySelector('#query');

pages.showConvert();
btnConvert.addEventListener('click', pages.showConvert);
btnPrice.addEventListener('click', pages.showPrice);
btnQuery.addEventListener('click', pages.showQuery);

