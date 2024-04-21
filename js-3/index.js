let count = parseInt(prompt("nece eded istiyirsiniz?"))
let total = 0
for (let index = 1; index <= count; index++) {
    let eded = parseInt(prompt("ededi daxil edin"))
    total += eded
}
console.log(parseInt(total / count))