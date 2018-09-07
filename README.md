# fantasy-game
Recreation of the card game Fantasy (2001)


### Mayor problema técnico
```javascript
{name :"hobgoblin",              //Swap your people (cards already p) with an opponent of your choice
  effect : function(cardPlayer) {
    var tmp= Object.assign(cardPlayer.population);
    cardPlayer.population = Object.assign(passivePlayer.population);
    passivePlayer.population = Object.assign(tmp);
    $("#game-log").append((cardPlayer.name) +" played a hobgoblin.<br>")
    }
```
    
### Mayor reto por solucionar
Añadir tres cartas más. 

### En un mundo ideal
Crearía un objeto Game() en el cual están todos los efectos de las cartas. En el objeto carta tan sólo habría una llamada al efecto correspondiente. 

### Un cachito de código para crear un mazo:
```javascript
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
```
