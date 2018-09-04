var deck= new DeckOfCards().init();
//Player constructor 
function Player() { 
  this.hand =[]
  this.population = {
    gnome:0,
    hobgoblin:0,
    goblin:0,
    imp:0,
    dryad:0
  }
}

Player.prototype.drawCards = function(numberOfCards) {
  for (var i=0;i<numberOfCards;i++) {
    randomCard = deck.splice(Math.floor(Math.random()*deck.length),1);
    this.hand.push(randomCard);
  }
  return this.hand;
  }

Player.prototype.playCard = function(card) {
  //get the hand of the player and find index of played card removing it from hand
  var playerCards= player1.hand.map(function(elem){return elem[0]["name"]})
  var played=this.hand.splice(playerCards.indexOf(card),1);
  this.population[played[0][0].name] +=1;
  played[0][0].effect();
}