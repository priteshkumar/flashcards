var inquirer = require("inquirer");
var decks = require("./deck");
console.log(decks);

function Clicontroller(){
  inquirer.prompt([{
  	name:"decktype",
  	message:"Select one of the decks",
  	type:"list",
  	choices:["tech","music","sports"],
  }]).then(function(answers){
  	  var Deck = null;
      if(answers.decktype === "tech"){
      	Deck = new decks.techDeck("technology");
      }
      else if(answers.decktype === "sports"){
      	Deck = new decks.sportsDeck("sports");
      }
      else if(answers.decktype === "music"){
      	Deck = new decks.musicDeck("music");
      }
      //console.log(Deck.flashcards);
      console.log(Deck.flashcardType);
  
      function queryLoop(){
         inquirer.prompt([{
         	
         }])
      }

  

  });

}


Clicontroller();