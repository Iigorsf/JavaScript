let amigo = {nome: 'Igor', sexo: 'M', peso: 68.5, engordar(p=0){
    console.log('Engordar')
    this.peso += p
}}
//console.log(typeof amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
