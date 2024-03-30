let str = 'salom bolajonlar nega uy ishi qmadila salom nima qvosla'
let box = ''

let arr = str.split('')

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 's') {
        box = box +arr[i]
        strs = box.split('')
        string = strs.join('-')
    }
}
console.log(string);
