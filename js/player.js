var deck= new DeckOfCards().init();
//Player constructor 
function Player(name) {
  this.name = name 
  this.hand =[]
  this.population = {
    gnome:0,
    hobgoblin:0,
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

Player.prototype.playCard = function(cardName) {
  //get the hand of the player and find index of played card removing it from hand
  var playerCards = this.hand.map(function(elem){return elem[0]["name"]})
  console.log(playerCards)
  var played=this.hand.splice(playerCards.indexOf(cardName),1);
  this.population[played[0][0].name] +=1;
  played[0][0].effect(this);
  displayCards(machine);
  displayCards(player);
}