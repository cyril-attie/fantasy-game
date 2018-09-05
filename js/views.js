//creating player objects, name must be player1 or machine
player = new Player("player");
player.hand= player.drawCards(5);
machine = new Player("machine");
machine.hand = machine.drawCards(5);
turnPlayer = player
passivePlayer = machine

$( "#start-button" ).click(function() {
  $(".game-intro").hide();
  alert( "Ready to start Fantasy game?"); 
  displayCards(machine);
  displayCards(player);
  cards.forEach(function(card){
    cardImage= document.createElement("img");
    cardImage.setAttribute("src", "images/"+card.name+".png");
    cardImage.setAttribute("id", card.name);
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("class", "card");
    cardImage.setAttribute("alt", card.name);
    document.getElementById("player-population").appendChild(cardImage);})
  cards.forEach(function(card){
    cardImage= document.createElement("img");
    cardImage.setAttribute("src", "images/"+card.name+".png");
    cardImage.setAttribute("id", card.name);
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("class", "card");
    cardImage.setAttribute("alt", card.name );
    document.getElementById("machine-population").appendChild(cardImage);
  })
  deckImage=document.createElement("img");
  deckImage.setAttribute("src", "images/back.png");
  deckImage.setAttribute("id", "deck-image");
  document.getElementById("deck-div").appendChild(deckImage);
  alert("Click on the Fantasy deck to draw a card")
});

$("#deck-div").click(function() {
  player.drawCards(1);
  displayCards(player);
});

function playerCard(e) {
  player.playCard(e.target.alt); // passed name of the card
  turnChange();
  playMachine();
};

function turnChange(){
  var tmp = turnPlayer 
  turnPlayer = passivePlayer
  passivePlayer = tmp
}

function playMachine() {
  machine.drawCards(1);
  displayCards(machine);
  cardIndex = Math.floor(Math.random()*machine.hand.length);
  cardName = $("#machine-hand").children()[cardIndex].alt;
  $("#machine-hand").children()[cardIndex].src="images/"+cardName+".png";
  machine.playCard(cardName);
  alert("Machine played " + cardName)
  setTimeout($("#machine-hand").removeChild($("#machine-hand").children()[index]),2000);
  turnChange();

}
// function machineCard(e) {
//   machine.playCard(e.target.alt, machine); // passed name of the card
//   displayCards(machine);
// };
function displayCards(turnPlayer){
  $("#"+turnPlayer.name+"-hand").empty();
  turnPlayer.hand.forEach(function(card){
    cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    if (turnPlayer.name == "machine") {
      cardImage.setAttribute("src", "images/back.png");
      cardImage.setAttribute("class", "card");
      cardImage.setAttribute("alt", card[0].name ); 
      document.getElementById("machine-hand").appendChild(cardImage); 
    } else if (turnPlayer.name == "player") {
      cardImage.setAttribute("src", "images/"+card[0].name+".png");
      cardImage.setAttribute("class", "card playerCard");
      cardImage.setAttribute("alt", card[0].name );
      cardImage.setAttribute("onclick","playerCard(event)" )
      document.getElementById("player-hand").appendChild(cardImage);
      }
})
}
