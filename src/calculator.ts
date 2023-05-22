enum OPERATIONS {
    sum = '+',
    substract = '-',
    multiply = '*',
    division = '/'
}

type Calculate = {
    a: number;
    b: number;
    operation: string
}

function calculate({ a, b, operation }: Calculate) {
    let result = null;
    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b)
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b)
            break;
        case OPERATIONS.substract:
            result = substract(a, b)
            break;
        case OPERATIONS.division:
            result = division(a, b)
            break;
        default:
            break;
    }

    return result;
}

