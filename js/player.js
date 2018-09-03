var deck= new DeckOfCards().init();
//Player constructor 
function Player() { 
  this.hand =[]
  this.population = {
    elf:0,
    gnome:0,
    hobgoblin:0,
    goblin:0,
    imp:0,
    fairy:0,
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