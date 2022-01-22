
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

console.log(calc('add', "35",3));
console.log(calc('add', 3,3));
console.log(calc('div', 0,3));

console.log(calc('div', 3,3));

console.log(calc('div', 3,3));