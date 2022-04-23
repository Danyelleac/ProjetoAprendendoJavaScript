//variaveis sons do jogo

let raquetada;
let ponto;
let trilha;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let rBolinha = dBolinha / 2 ;

//velocidade da bolinha
let velXBolinha = 6;
let velYBolinha = 6;


//variáveis raquetes 
let wRaquete = 10;
let hRaquete = 90;
let colidiu = false;

//variaveis raquete do Oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 200-45;
let velYOponente;
let chanceErrar = 0;


//variaveis raquetes do Jogador

let xRaquetePlayer = 10;
let yRaquetePlayer = 200-45;

let velYCimaPlayer = -10;
let velYBaixoPlayer = 10;

//variaveis Placar

let meusPontos = 0;
let pontosOponente = 0;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquetePlayer,yRaquetePlayer);
  movimentaRaquetePlayer();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
   colisaoRaqueteBiblioteca(xRaquetePlayer,yRaquetePlayer);
    colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
 
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentaBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + rBolinha> width ||
     xBolinha - rBolinha< 0){
    velXBolinha *= -1;
  }
  if (yBolinha + rBolinha> height ||
     yBolinha - rBolinha < 0){
    velYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,wRaquete,hRaquete);
}


function movimentaRaqueteOponente(){
  velYOponente = yBolinha - yRaqueteOponente - hRaquete/2 - 30 ;
  yRaqueteOponente +=  velYOponente + chanceErrar;
    
}

function movimentaRaquetePlayer(){
  if(keyIsDown(UP_ARROW)){
yRaquetePlayer += velYCimaPlayer;
  }
  if(keyIsDown(DOWN_ARROW)){
yRaquetePlayer += velYBaixoPlayer;
  }
}

function colisaoRaqueteBiblioteca(x,y){
 colidiu =  collideRectCircle(x,y,wRaquete,hRaquete,xBolinha,yBolinha,rBolinha);
  if(colidiu){
    velXBolinha *=-1
    raquetada.play();
  }
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(16);
   
  stroke(255);
  fill(color(255,40,0)); 
  rect(150,10,40,20);
  rect(450,10,40,20);  
  fill(255)//preencher com a cor branca
  text(meusPontos, 170, 26)
  text(pontosOponente, 470, 26)
   
}

function marcaPonto(){
  if(xBolinha>590){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha<10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceErrar += 1
    if (chanceErrar >= 39){
    chanceErrar = 40
    }
  } else {
    chanceErrar -= 1
    if (chanceErrar <= 35){
    chanceErrar = 35
    }
  }
}