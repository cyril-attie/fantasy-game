//creating player objects, name must be player1 or machine



const player = new Player("player");
player.hand= player.drawCards(5);
const machine = new Player("machine");
machine.hand = machine.drawCards(5);
var current_player= "player"
var turnPlayer = player;
var passivePlayer = machine;
var playCanDraw=true;


function playerCard(e) {
  player.playCard(e.target.alt); // passed name of the card
  turnChange();
  setTimeout(playMachine(),2000);
};
