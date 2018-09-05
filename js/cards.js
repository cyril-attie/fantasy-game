var cards=[ 
  {name :"gnome",              //draw two extra cards
  effect : function(cardPlayer) {
    cardPlayer.drawCards(2);
    console.log(JSON.stringify(cardPlayer.name) +" Played a gnome.")
    }
  }, 
  {name :"imp",            //Swap your hand of cards with another player's hand
  effect : function(cardPlayer) {
    var tmp = machine.hand.slice();
    machine.hand = player.hand.slice();
    player.hand = tmp;
    console.log(JSON.stringify(cardPlayer.name) +" Played a imp.")
    }
   },
  {name :"dryad",            //Steal a card already played by an opponent and add it to your people
  effect : function(cardPlayer) {
    var people = Object.keys(passivePlayer.population).filter(key => passivePlayer.population[key]);
    var name=people[Math.floor(Math.random()*people.length)];
    name==undefined?name="dryad":console.log("name is " + name);
    turnPlayer.population[name]+=1;
    passivePlayer.population[name]-=1;
    console.log(JSON.stringify(cardPlayer.name) +" Played a dryad.")
  }
},
  {name :"hobgoblin",              //Swap your people (cards already played) with an opponent of your choice
  effect : function(cardPlayer) {
    var tmp= Object.assign(cardPlayer.population);
    cardPlayer.population = Object.assign(passivePlayer.population);
    passivePlayer.population = Object.assign(tmp);
    console.log(JSON.stringify(cardPlayer.name) +" Played a hobgoblin.")
    }
  }]



//the deck object constructor
function DeckOfCards() {
  this.deck = [];
  this.init = function() {
    for (var i=0; i<cards.length; i++){
      for (var j=0;j<8;j++){
        this.deck.push(cards[i])
      };
    }; 
    return this.deck;
  }
} 



