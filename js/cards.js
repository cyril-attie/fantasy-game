var cards=[ 
  {name :"gnome",              //draw two extra cards
  effect : function(cardPlayer) {
    cardPlayer.drawCards(2);
    }
  }, 
  {name :"imp",            //Swap your hand of cards with another player's hand
  effect : function(cardPlayer) {
    tmp = turnPlayer.hand;
    turnPlayer.hand = passivePlayer.hand;
    passivePlayer.hand = tmp;
    }
   },
  {name :"dryad",            //Steal a card already played by an opponent and add it to your people
  effect : function(cardPlayer) {
    var people = Object.keys(passivePlayer.population).filter(key => passivePlayer.population[key]);
    name=people[Math.floor(Math.random()*people.length)];
    turnPlayer.population[name]+=1;
    passivePlayer.population[name]-=1;
    
  }
},
  {name :"hobgoblin",              //Swap your people (cards already played) with an opponent of your choice
  effect : function(cardPlayer) {
    console.log("Machine population"+ JSON.stringify(machine.population));
    console.log("player1 population"+ JSON.stringify(player.population));
    console.log("AFTER");
    tmp= Object.assign(cardPlayer.population);
    cardPlayer.population = Object.assign(passivePlayer.population);
    passivePlayer.population = Object.assign(tmp);
    console.log("Machine population"+JSON.stringify(machine.population));
    console.log("player1 population"+ JSON.stringify(player.population));
   
    }
  },
  {name :"goblin", 
  effect : function(cardPlayer) {             //take two cards at random from another player hand
    two_cards= passivePlayer.hand.splice(0,2)
    // console.log(turnPlayer);
    // turnPlayer.hand.push(two_cards)
    // console.log(turnPlayer);
    two_cards.forEach(function(card){
      console.log(turnPlayer.hand)
      turnPlayer.hand.push(card)
      console.log(turnPlayer.hand)})
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



