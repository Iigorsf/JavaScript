let num = [5, 5, 8, 9, 3]

console.log(num)

num[5] = 4
// num.push(5) acrescenta valor no final do array
// num.length tamanho do vetor
// num.sort() ordenação crescente
console.log(num)

console.log(`Tamanho do vetor num é ${num.length}`)
num.sort() 

console.log(num)

for(var i=0; i<num.length; i++){
    console.log(`O valor na posição ${i} é ${num[i]}`)
}

for( let i in num){
    console.log(num[i])
}

let pos = num.indexOf(9)
if( pos == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor 9 está na posição ${pos}`)
}