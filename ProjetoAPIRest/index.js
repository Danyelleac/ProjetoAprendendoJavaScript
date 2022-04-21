//a responsabilidade do arquivo index é subir o servidor(rodar o codigo)

// aqui estou exportando para a variavel customexpress o arquivo customExpress
const customExpress = require('./config/customExpress')

//aqui estou executando através da variavel app o module(função) que esta dentro do arquivo customExpress
const app = customExpress()

//vamos subir este app no servidor , então pecisamos informar a porta que o app vai ficar escutando pra ver se chega alguma requisição , no caso vai ser a porta 3000, também inclui uma arrow function que vai devolver o texto inserido abaixo para testar se o código esta funcionando, ou seja se a porta esta escutando 
app.listen(3000,()=>console.log('servidor rodando na porta 3000'))

