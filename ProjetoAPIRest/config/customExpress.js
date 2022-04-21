// a responsabilidade do config/customExpress é configurar qualquer coisa que a gente precise configurar dentro do express

//abaixo estou chamando a dependencia express que instalei , para que eu consiga usa-la
const express = require('express')

//abaixo estou chamando a dependencia consign que instalei , para que eu consiga usa-la, junta rotas diversar e inclue em uma rota principal
const consign = require('consign')

//crio um module que vai criar um app configurar o app e retornar um app

module.exports = () =>{

    //vamos executar um app que vai ser o servidor que a gente vai rodar então declaramos este objeto que vai receber a biblioteca express
    const app = express ()
    //abaixo estou incluindo tudo que estiver no meu controllers no meu app
    consign()
        .include('controllers')
        .into (app)
        //o module vai retornar o app 
        return app
}