const inputANode = document.querySelector('.input-a') as HTMLInputElement
const inputBNode = document.querySelector('.input-b') as HTMLInputElement
const selectOperationNode = document.querySelector('.output-operation') as HTMLSelectElement
const btnResultNode = document.querySelector('.btn-result') as HTMLButtonElement
const outputNode = document.querySelector('.output-title') as HTMLHeadingElement

btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({a, b, operation});

    outputNode.innerHTML = String(result)
})

