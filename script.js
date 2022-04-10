// Handles
const btn_numbers = document.querySelectorAll('[number]');
const btn_operations = document.querySelectorAll('[operation]');
const btn_del = document.querySelector('[del]');
const btn_all_clear = document.querySelector('[ac]');
const btn_equal = document.querySelector('[eq]');
const input_current = document.querySelector('#input');
const input_previous = document.querySelector('#input-history');

// Global Variables
let operand1 = '', operand2 = '';
let operator = '';
let appended = '';

btn_numbers.forEach(btn_number => {
    btn_number.addEventListener('click', () => {
        display(appendNumber(btn_number.textContent));
    })
})

// when an operator is clicked
// if operand1 is null, operand1 = appended.
// else operand2 = appended.
// operator = btn.operation.textContent.
// input previous = appended + operator;
btn_operations.forEach(btn_operation => {
    btn_operation.addEventListener('click', () => {
        if (appended == '') { return; }
        if (operand1 == '')
            operand1 = appended;
        else
            operand2 = appended;
        operator = btn_operation.textContent;
        input_previous.textContent = appended + operator;
        appended = '';
    })
})

btn_equal.addEventListener('click', () => {
    operand2 = appended;
    operand1 = parseFloat(operand1) + parseFloat(operand2)
    input.textContent = operand1;
    operand2 = '';
    appended = operand1; 
})

function appendNumber(str) {
    appended = appended + str;
    return appended;
}

function display(x) {
    input_current.textContent = x;
}
