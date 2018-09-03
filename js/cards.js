var cards=[ 
  {name :"gnome",              //draw two extra cards
  effect : function() {
    Player.drawCards(2);
    }
  },
  {name :"hobgoblin",              //Swap your people (cards already played) with an opponent of your choice
  effect : function() {
    return copyiedCard.effect();
    }
  },
  {name :"goblin", 
  effect : function(targetPlayer) {              //take two cards at random from another player hand
    two_cards= targetPlayer.hand.splice(0,2);
    player.push(two_cards)
    }
  }, 
  {name :"imp",            //Swap your hand of cards with another player's hand
  effect : function() {
    tmp = player1.hand();
    player1.hand = machine.hand;
    machine.hand = tmp;
    }
   },
  {name :"dryad",            //Steal a card already played by an opponent and add it to your people
  effect : function(targetPlayer) {
    
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



