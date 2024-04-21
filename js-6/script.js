let a = parseInt(prompt("a"))
let b = parseInt(prompt("b"))
let operator = prompt("operator")

const calc = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "/":
            return a / b
        case "*":
            return a * b
        default:
            return `bele bir emeliyyat yoxdur`
    }
}
console.log(calc(a, b, operator))