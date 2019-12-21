/* reglas Piedra papel o tijera, 
hacer un juego de 5 rondas //
1-piedra
2-papel
3-tijera
*/

// definir variables fundamentales 

var computer, playerMove, round, gamePlaying;
gamePlaying = true;
init();
console.log(typeof(gamePlaying))


document.querySelector('.rematch').addEventListener('click',function(){
  gamePlaying = true;
  console.log(gamePlaying)
  init();
})

document.querySelector('#rock-0').addEventListener('click', function(){
  if (gamePlaying) { playerMove = 1;  
  computerplay();   
  winner();  }
  })

document.querySelector('#paper-0').addEventListener('click', function(){
  if (gamePlaying) {playerMove = 2;  
  computerplay(); 
  winner();  }
})

document.querySelector('#scissors-0').addEventListener('click', function(){
  if (gamePlaying) {playerMove = 3;  
  computerplay(); 
  winner();  }
})


function computerplay(){
  comMove = Math.floor(Math.random()*3+1); 
    if (comMove === 1){
      remove();
      document.querySelector('#rock-1').style.display = 'block';    
    } else if ( comMove === 2){
      remove();
      document.querySelector('#paper-1').style.display = 'block';    
    } else{
      remove();
      document.querySelector('#scissors-1').style.display = 'block';    
    } 

}

function winner(){
  switch (true){
    case comMove === playerMove:
      update();      
      break;
    case  (comMove === 1 && playerMove === 3) || (comMove === 2 && playerMove === 1) || (comMove === 3 && playerMove === 2) :
      score[1] = score[0] + 1;
      update();               
      break;
    default:
      score[0] = score[0] + 1;
      update();      
        break;        
    }
  }

function update(){
  document.querySelector('.player-0').textContent = score[0];
  document.querySelector('.player-1').textContent = score[1];
    if (score[0] >= 5){
      gamePlaying = false;      
      document.querySelector('#choice-1').textContent= "Com loses";
      document.querySelector('#choice-0').textContent= "!You Win!";

    } else if (score[1] >= 5){
      document.querySelector('#choice-1').textContent= "Com wins";
      document.querySelector('#choice-0').textContent= "You lose";
      remove2();
      gamePlaying = false;        

    } else {
      
    }
  
  } 
function init(){
  comMove = 0;
  playerMove = 0;
  score = [0,0];
  round = 0;
  document.querySelector('.player-0').textContent = 0;
  document.querySelector('.player-1').textContent = 0;
  remove();

}

function remove(){
  document.querySelector('#rock-1').style.display = 'none';
  document.querySelector('#paper-1').style.display = 'none';
  document.querySelector('#scissors-1').style.display = 'none';
}

function remove2(){
  document.querySelector('#rock-0').style.display = 'none';
  document.querySelector('#paper-0').style.display = 'none';
  document.querySelector('#scissors-0').style.display = 'none';
}
/*
//// valores base 
document.querySelector('#rock-1').style.display = 'none';
document.querySelector('#paper-1').style.display = 'none';
document.querySelector('#scissors-1').style.display = 'none';


})


*/

