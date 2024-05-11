"use strict";

let menu_symbol = document.getElementById('icon');
let menu_itens = document.getElementById('itens');

menu_symbol.addEventListener('click', (evt)=>{
    if(menu_symbol.innerText == 'menu'){
        menu_symbol.innerText = 'close'
        menu_itens.style.display = 'flex'
        menu_itens.style.position = 'absolute'
    }else{
        menu_symbol.innerText = 'menu'
        menu_itens.style.display = 'none'
        menu_itens.style.transform = '-100vh'
    }
})