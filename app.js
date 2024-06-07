function calculator(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        return "unknown value";
    }
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        return "unknown value";
    }
    var total;
    if (operator === '+')
        total = num1 + num2;
    if (operator === '-')
        total = num1 - num2;
    if (operator === '*')
        total = num1 * num2;
    if (operator === '/')
        total = num1 / num2;
    return total;
}
console.log(calculator(1, 2, "+")); //=> 3
console.log(calculator(1, 2, "*")); //=> 2
console.log(calculator(1, 2, "&")); //=> "unknown value"
console.log(calculator(1, 'k', 'x')); //=> "unknown value"
