let num = [5,6,8,6,7]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não existe!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}