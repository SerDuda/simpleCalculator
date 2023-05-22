"use strict";
const inputANode = document.querySelector('.input-a');
const inputBNode = document.querySelector('.input-b');
const selectOperationNode = document.querySelector('.output-operation');
const btnResultNode = document.querySelector('.btn-result');
const outputNode = document.querySelector('.output-title');
btnResultNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;
    const result = calculate({ a, b, operation });
    outputNode.innerHTML = String(result);
});
