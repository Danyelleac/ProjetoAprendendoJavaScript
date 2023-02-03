 //conditional if/else
 
 let nota = 12;
 
 if(nota == 10){
    console.log("arrasou tirou 10")
 }else if(nota<=5){
    console.log("reprovado")
 }else{
    console.log("não tirou 10")
 }

//operador ternário

let msg =(nota>10)? "não é possivel":"ótimo"
console.log(msg)

//falsy e truthy
//falsy 0,"",NAN,undefined,null,false
//truthy-todo o resto
if(null){
    console.log("true")
}else{
    console.log("false")
}

//curto-circuito

let N =0;
console.log(N)
N= N || 10
console.log(N)

let isValid = true
isValid && console.log("é valido")//executa a ultima se a primeira for true se a primeira for false não executa nada
isValid ||  console.log("não é valido")//se a primeira for true não executa mais nada se a primeira for false executa a ultima

//switch case
let diaSemana = 1
switch (diaSemana){//ele compara valor e tipo
case 0:
    console.log("segunda")
    break;
case 1:
    console.log("terça")
    break;
case 2:
    console.log("quarta")
    break;
case 3:
    console.log("quinta")
    break;
}

//repetições-aula 32
