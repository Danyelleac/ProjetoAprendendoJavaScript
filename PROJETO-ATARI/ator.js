let xAtor = 200;
let yAtor = 366;
let colisao = false;
let dAtor = 30;
let meusPontos = 0;

function mostraAtor(){
  image(imgAtor,xAtor,yAtor,dAtor,dAtor);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=5
  }if(keyIsDown(DOWN_ARROW)){
    if(yAtor<366){
      yAtor+=5
    }
  }
  
}

function verificaColisao(){
  for(let i=0;i<imgCarro.length;i++){
    colisao=collideRectCircle(xCarro[i],yCarro[i],wCarro,hCarro,xAtor,yAtor,dAtor)
    if(colisao){
      yAtor = 366
      somColisao.play();
      if(meusPontos>0){
        meusPontos-=1;
      }
    }
    
  }
  
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  text(meusPontos,width/2,25);
  fill(color(255,240,60));
}

function marcarPonto(){
  if(yAtor<15){
    meusPontos +=1;
    somPonto.play();
    yAtor = 366;
  }
}