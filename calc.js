
function checkInput(num1,num2) {
    let checkInput = (typeof num1 !== 'number' && typeof num2 !== 'number')
    if (checkInput) {
        return true;
    }
}

function calc(operatoin,num1,num2){
    if (checkInput(num1,num2)) return 'Is not number';
    switch (operatoin) {
        case "sum":
            return num1+num2;
        case "sub":
            return num1-num2;
        case "mult":
            return num1*num2;
        case "div":
            return (num1===0) ? "division by zero" : num1/num2;
        default:
            return "unknown operation";
    }
}


function calcObject(operation,num1,num2){

    if (checkInput(num1,num2)) return 'Is not number';

    const operations = {
        sum: num1+num2,
        sub: num1-num2,
        mult: num1*num2,
        div: (num1===0) ? "division by zero" : num1/num2
    }
    const findOperator = ([operation] in operations);
    return findOperator ? operations[operation] : "unknown operation";
}

console.log("---------------Switch---------------")
console.log(calc('ааа', "35",3));
console.log(calc());

console.log("---------------Object---------------")
console.log(calcObject('sum', "10","3"));
console.log(calcObject('sum',2,3));
console.log(calcObject(2,3));
