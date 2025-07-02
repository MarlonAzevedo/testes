const elementos = [
	{tag:'p',texto:'texto 1'},
	{tag:'p',texto:'texto 2'},
	{tag:'p',texto:'texto 3'},
	{tag:'p',texto:'texto 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

elementos.forEach((item) => {
    let {tag,texto} = item;
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    div.appendChild(elemento);
});

container.appendChild(div);


// teste de cores 
const ps = document.querySelectorAll('p');
const estiloBG = getComputedStyle(document.body).backgroundColor;
ps.forEach((item) => {     
    item.style.backgroundColor = estiloBG;
    item.style.color = '#fff';
})