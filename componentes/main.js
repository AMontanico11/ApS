let root = document.querySelector("#root");

root.innerHTML = `    
    <header id="header"></header>
    <section id="estadistica"></section>
    <section id="piramide"></section>`;

import {header1} from './header.js';
let header = document.querySelector("#header");
header.innerHTML = header1;


import {estadistica1} from './estadistica.js';
let estadistica = document.querySelector("#estadistica");
estadistica.innerHTML = estadistica1;

import {piramide1} from './piramide.js';
let piramide = document.querySelector("#piramide");
piramide.innerHTML = piramide1;