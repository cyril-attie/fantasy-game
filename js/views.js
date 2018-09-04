
$( "#start-button" ).click(function() {
  $(".game-intro").hide();
  alert( "Ready to start Fantasy game?"); 
  player1 = new Player()
  player1.hand= player1.drawCards(5);
  machine = new Player()
  machine.hand = machine.drawCards(5);
  
  displayMachineCards();
  displayPlayerCards();
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
  document.getElementById("deck-image").appendChild(deckImage);
  
});

$("#deck-image").click(function() {
  player1.drawCards(1);
  displayPlayerCards();
});

function playCard(e) {
  player1.playCard(e.target.alt); // passed name of the card
  displayPlayerCards();
};

function displayMachineCards() {
  $("#machine-hand").empty();
  machine.hand.forEach(function(card){
    cardImage = document.createElement("img");
    cardImage.setAttribute("src", "images/back.png");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("class", "card");
    cardImage.setAttribute("alt", "Card back");
    document.getElementById("machine-hand").appendChild(cardImage);
  })
};

function displayPlayerCards() {
  $("#player-hand").empty();
  player1.hand.forEach(function(card){
    cardImage = document.createElement("img");
    cardImage.setAttribute("src", "images/"+card[0].name+".png");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("class", "card playerCard");
    cardImage.setAttribute("alt", card[0].name );
    cardImage.setAttribute("onclick","playCard(event)" )
    document.getElementById("player-hand").appendChild(cardImage);
  });
};