$( "#start-button" ).click(function() {
  //hide the intro logo and start button
  $(".game-intro").hide();
  alert( "Ready to start Fantasy game?");
  //tune harry potter music 
  var audio = new Audio('audio/harry_potter_theme.mp3');
  audio.setAttribute("loop",'');
  audio.play();
  //display cards
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
  var populationTotal=document.createElement('p')
  populationTotal.id="player-population-total";
  populationTotal.setAttribute("class", "counter");
  document.getElementById("player-population").appendChild(populationTotal);
  cards.forEach(function(card){
    cardImage= document.createElement("img");
    cardImage.setAttribute("src", "images/"+card.name+".png");
    cardImage.setAttribute("id", card.name);
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("class", "card");
    cardImage.setAttribute("alt", card.name );
    document.getElementById("machine-population").appendChild(cardImage);
  })
  populationTotal=document.createElement('p')
  populationTotal.id="machine-population-total"
  populationTotal.setAttribute("class", "counter");
  document.getElementById("machine-population").appendChild(populationTotal);
  deckImage=document.createElement("img");
  deckImage.setAttribute("src", "images/back.png");
  deckImage.setAttribute("id", "deck-image");
  document.getElementById("deck-div").appendChild(deckImage);
  
  deckCounter=document.createElement("p");
  deckCounter.setAttribute("id", "deck-counter");
  deckCounter.setAttribute("class", "counter");
  $("#deck-counter").text(deck.length);
  document.getElementById("deck-div").appendChild(deckCounter);
 
  machineCard=$("#deck-div").append('<div class="machinePickedCard"></div>')
  $("#game-log").append(`GAME LOG: <br>
  Click on the Fantasy deck to draw a card<br>`)
});

$("#deck-div").click(function() {
  if (playerCanDraw= true){
  player.drawCards(1);
  playerCanDraw=false}
  displayCards(player);
});


function turnChange(){  
  checkIfGameEnded()
  if (current_player="player") { 
    turnPlayer = machine
    passivePlayer = player
    current_player="machine"
  } else if (current_player="machine") { 
    turnPlayer = player
    passivePlayer = machine
    current_player="player"
  }
}

function checkIfGameEnded(){
  playerPopulation=Object.values(player.population).reduce(function(acc, nb){return acc+=nb},0)
  machinePopulation=Object.values(machine.population).reduce(function(acc, nb){return acc+=nb},0);
  document.getElementById("machine-population-total").innerHTML=machinePopulation
  document.getElementById("player-population-total").innerHTML=playerPopulation
  if (deck.length==0) {
    finnishGame(playerPopulation,machinePopulation)
  }
}

function finnishGame(playerPopulation,machinePopulation) {    
  if (playerPopulation>machinePopulation) {
    alert("You won, your population has "+playerPopulation+" people and machine population has " + machinePopulation +" people.")
  } else if (playerPopulation==machinePopulation){
    alert("It's a draw, your population has "+playerPopulation+" people and machine population has " +machinePopulation +" people.")
  } else {
    alert("You lost, your population has "+playerPopulation+" people and machine population has " + machinePopulation +" people.")
  }
  alert("New game?")
  location.reload()
}

function playMachine() {
  machine.drawCards(1);
  playCanDraw=true;
  displayCards(machine);
  var cardIndex = Math.floor(Math.random()*machine.hand.length);
  var cardName = $("#machine-hand").children()[cardIndex].alt;
$("#machine-hand").children()[cardIndex].src="images/"+cardName+".png";

 machineCard = $(".machinePickedCard").empty()
 machineCard.append("Machine played <img class='machine-card' src=images/"+cardName+".png>" )
  machine.playCard(cardName);
  
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
