/*----- constants -----*/



/*----- app's state (variables) -----*/

var count;

/*----- cached element references -----*/

var display = document.getElementById('display');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var numInput = document.querySelector('input');

/*----- event listeners -----*/

document.getElementById('plus').addEventListener('click', increment);
document.getElementById('minus').addEventListener('click', decrement);

/*----- functions -----*/

function increment() {
    count += parseInt(numInput.value);
    render();
}

function decrement() {
    count -= parseInt(numInput.value);
    render();
}

function initialize() {
    count = 0;
}

function render() {
    numInput.value = 1;
    count = numInput.value ? count : 0;
    display.textContent = `${count}`;
    display.style.color = count < 0 ? 'red' : 'black';
}

initialize();
render();