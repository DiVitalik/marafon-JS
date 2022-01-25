
function checkInput(num1,num2) {
    let checkInput = (typeof num1 !== 'number' || typeof num2 !== 'number')
    if (checkInput) {
        return true;
    }
}

function calc(Operatoin,num1,num2){
    if (checkInput(num1,num2)) return 'Is not text';
    switch (Operatoin) {
        case "add":
            return num1+num2;
        case "sub":
            return num1-num2;
        case "mul":
            return num1*num2;
        case "div":
            return (num1===0) ? "division by zero" : num1/num2;
        default:
            return "unknown operation";
    }
}


function calcObject(operation,num1,num2){

    if (checkInput(num1,num2)) return 'Is not text';

    const operations = {
        add: num1+num2,
        sub: num1-num2,
        mul: num1*num2,
        div: (num1===0) ? "division by zero" : num1/num2
    }

       for ([operation] in operations) {
          return operations[operation];
       }
    // const findOperator = ([operation] in operations);
    //
    // if (findOperator) {
    //     return  operations[operation];
    // }
    return "unknown operation";

}

console.log("---------------Switch---------------")
console.log(calc('add', "35",3));
console.log(calc('sub', 3,3));
console.log(calc('div', 3,3));

console.log("---------------Object---------------")

console.log(calcObject('add', 10,3));
console.log(calcObject('sub', 2,3));
console.log(calcObject('mul', 4,3));
console.log(calcObject('div', 0,3));
