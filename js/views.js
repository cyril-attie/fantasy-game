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
  
  deckCounter=document.createElement("p");
  deckCounter.setAttribute("id", "deck-counter");
  $("#deck-counter").text(deck.length);
  document.getElementById("deck-div").appendChild(deckCounter);
 
  machineCard=$(".container").append('<div class="machinePickedCard"></div>')
  machineCard.append("<img src=#>" )
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
  $("#deck-counter").text(deck.length);
  checkIfFinnish();
  var tmp = turnPlayer 
  turnPlayer = passivePlayer
  passivePlayer = tmp
}

function checkIfFinnish() {
 if (deck.length==0) {
    finnishGame()
  }
}

function finnishGame() {
  
  playerPopulation=Object.values(player.population).reduce(function(acc, nb){return acc+=nb},0)
  machinePopulation=Object.values(machine.population).reduce(function(acc, nb){return acc+=nb},0);
  if (playerPopulation>machinePopulation) {
    alert("You won, your population has "+playerPopulation+" people and machine population has " + machinePopulation +" people.")
  } else if (playerPopulation==machinePopulation){
    alert("It's a draw, your population has "+playerPopulation+" people and machine population has " +machinePopulation +" people.")
  } else {
    alert("You lost, your population has "+playerPopulation+" people and machine population has " + machinePopulation +" people.")
  }
}

function playMachine() {
  machine.drawCards(1);
  displayCards(machine);
  var cardIndex = Math.floor(Math.random()*machine.hand.length);
  var cardName = $("#machine-hand").children()[cardIndex].alt;
$("#machine-hand").children()[cardIndex].src="images/"+cardName+".png";
 console.log($("#machine-hand").children()[cardIndex].src)
 machineCard = $(".machinePickedCard").empty()
 machineCard.append("Machine played <img src=images/"+cardName+".png>" )
 alert("Machine played " + cardName)
  machine.playCard(cardName);
  console.log($("#machine-hand"))
  turnChange();
}

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
