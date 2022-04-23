let yCarro = [50,100,155,215,270,320]
let xCarro = [600,600,600,600,600,600]
let velCarro = [3,4,4.5,4,3.5,2.6]

let hCarro = 30;
let wCarro = 50;


function mostraCarro(tipo,x,y){
  image(tipo,x,y,wCarro,hCarro);
}

function movimentaCarro(){
  for(let i=0;i<xCarro.length;i++){
  xCarro[i] -= velCarro[i];
  }
  
  for(let i=0;i<xCarro.length;i++){
    if(xCarro[i]<0){
      xCarro[i] = 600;
    }
  }
    
}