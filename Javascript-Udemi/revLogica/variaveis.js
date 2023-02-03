var hello = "ES5 ela é cross-browser, permite que eu declare variaveis com o mesmo nome"
let hey = "ES2015- variavel que pode ser alterada"
const hi = "ES2015- variavel que não podemos alterar depois"

console.log(hello)
console.log(hey)
console.log(hi)

//primitivos
let minhaVar = "string"
let _var='lalalal "fjfjfj" '
console.log(minhaVar)
console.log(_var)

const ok = `concatenando ${minhaVar}`
console.log(ok)
console.log(typeof ok, typeof minhaVar)

//number
let N1 =10
let N2 = 1.2
console.log(N1+N2)

//booleam

const isValed= true
console.log(isValed)

//undefined

let varteste
console.log(varteste)

//conversão de tipos

let N3 = "12"
console.log(N3-N1, typeof N3,typeof N1)
console.log(N3+N1)//concatena com + porque + também concatena

N2 = parseFloat(N2)//só consegue converter se os primeiros caracteres forem numbers
N3 = parseInt(N3)//só consegue converter se os primeiros caracteres forem numbers
N1 = Number(N1)//não converte se tiver algum caracter diferente de number

console.log(N2,N1,N3, typeof N2,typeof N1, typeof N3)

N1 = N1.toString();

console.log(N1, typeof N1)