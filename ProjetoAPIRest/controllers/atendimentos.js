// a função do controllers controlar quais as rotas que temos e oque a gente tem que fazer quando acessar cada uma dessas rotas

//como atendimentos não esta conectado com o arquivo index.js eu devo criar um modulo export que vai exportar a função app

module.exports = app =>{
//abaixo eu vou criar uma rota  usando o get e como parametro eu coloco o caminho no caso é o /atendimentos , criei uma arrow função que vai imprimir um texto no nav , uma resposta a minha requisição!.Vale lembrar que o get tem 2 parametros o req que é oque a porta esta ouvindo e o res que é oque o servidor vai responder quando resceber uma requisição.

app.get('/atendimentos', (req, res) => res.send('você esta no servidor de atendimento !'))

//para solicitar uma informação do user eu crio um post
app.post('/atendimentos',(req,res) => {
    console.log(req.body)
    res.send('você esta na rota de atendimento e esta realizando um post!')})

}
