let a = {
    nome :"Luiz", nota : 9.9
}

//console.log(a)

//PASSANDO/TRANSFORMANDO PARA JSON
let b = JSON.stringify(a);

//String normal
let a2 = '{"nome":"Antonio", "nota": 5.9}'

//passsando a variavel a2 para JSON, NÃO ESQUECER DAS ASPAS NOS LUGARES CORRETOS
let b2  = JSON.parse(a2)

console.log(a)
console.log('#########################')
console.log(b)

console.log('#########################')

console.log(a2)
console.log('#########################')
console.log(b2)
console.log('#########################')

console.log(b2.nota)