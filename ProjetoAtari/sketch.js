function setup() {
    createCanvas(400, 400);
    somTrilha.loop();
  }
  
  function draw() {
    mostraEstrada();
    mostraAtor();
    for(let i=0;i<imgCarro.length;i++){
    mostraCarro(imgCarro[i],xCarro[i],yCarro[i]);
    }
    movimentaCarro();
    movimentaAtor();
    verificaColisao();
    incluiPontos();
    marcarPonto();
     
  }
  