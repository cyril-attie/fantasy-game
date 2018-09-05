var cards=[ 
  {name :"gnome",              //draw two extra cards
  effect : function(cardPlayer) {
    cardPlayer.drawCards(2);
    console.log(JSON.stringify(cardPlayer.name) +"Drew 2 extra cards successfully.")
    }
  }, 
  {name :"imp",            //Swap your hand of cards with another player's hand
  effect : function(cardPlayer) {
    tmp = machine.hand;
    player.hand = machine.hand;
    machine.hand = tmp;
    console.log("Changed hands successfully.")
    }
   },
  {name :"dryad",            //Steal a card already played by an opponent and add it to your people
  effect : function(cardPlayer) {
    console.log("machine population"+ JSON.stringify(machine.population));
    console.log("player population"+ JSON.stringify(player.population));
    var people = Object.keys(passivePlayer.population).filter(key => passivePlayer.population[key]);
    name=people[Math.floor(Math.random()*people.length)];
    turnPlayer.population[name]+=1;
    passivePlayer.population[name]-=1;
    console.log("Card stolen is " +name)    
    console.log("machine population"+ JSON.stringify(machine.population));
    console.log("player population"+ JSON.stringify(player.population));
  }
},
  {name :"hobgoblin",              //Swap your people (cards already played) with an opponent of your choice
  effect : function(cardPlayer) {
    console.log("machine population"+ JSON.stringify(machine.population));
    console.log("player population"+ JSON.stringify(player.population));
    console.log("AFTER");
    tmp= Object.assign(cardPlayer.population);
    cardPlayer.population = Object.assign(passivePlayer.population);
    passivePlayer.population = Object.assign(tmp);
    console.log("machine population"+JSON.stringify(machine.population));
    console.log("player population"+ JSON.stringify(player.population));
   
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



