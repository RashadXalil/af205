let baslangic = 10
let son = 17

function elnur(baslangic, son) {
    let items = []
    for (let i = baslangic; i <= son; i++) {
        items.push(i)
    }
    return items
}
console.log(elnur(baslangic, son))