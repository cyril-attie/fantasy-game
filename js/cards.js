var cards=[ 
  {name :"gnome",              //draw two extra cards
  effect : function(e) {
    player1.drawCards(2);
    }
  }, 
  {name :"imp",            //Swap your hand of cards with another player's hand
  effect : function() {
    tmp = player1.hand;
    player1.hand = machine.hand;
    machine.hand = tmp;
    displayPlayerCards();
    displayMachineCards();
    }
   },
  {name :"dryad",            //Steal a card already played by an opponent and add it to your people
  effect : function() {
    people = Object.keys(machine.population).filter(key => machine.population[key]);
    console.log(people);
    
  }
},
  {name :"hobgoblin",              //Swap your people (cards already played) with an opponent of your choice
  effect : function() {
    console.log("Machine population"+ JSON.stringify(machine.population));
    console.log("player1 population"+ JSON.stringify(player1.population));
    console.log("AFTER");
    tmp= Object.assign(machine.population);
    machine.population = Object.assign(player1.population);
    player1.population = Object.assign(tmp);
    console.log("Machine population"+JSON.stringify(machine.population));
    console.log("player1 population"+ JSON.stringify(player1.population));
   
    }
  },
  {name :"goblin", 
  effect : function() {              //take two cards at random from another player hand
    two_cards= machine.hand.splice(0,2);
    player1.hand.push(two_cards)
    }
  }
]

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



