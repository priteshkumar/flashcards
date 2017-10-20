var inquirer = require("inquirer");
var decks = require("./deck");


function Clicontroller(){
  this.Deck = null;
  this.numqueries = 5;
  this.queryCounter = 0;
     
  this.startGame = function(){
  var that = this;
  inquirer.prompt([{
  	name:"decktype",
  	message:"Select one of the decks",
  	type:"list",
  	choices:["tech","music","sports"],
  }]).then(function(answers){
  	  
      if(answers.decktype === "tech"){
      	that.Deck = new decks.techDeck("technology");
      }
      else if(answers.decktype === "sports"){
      	that.Deck = new decks.sportsDeck("sports");
      }
      else if(answers.decktype === "music"){
      	that.Deck = new decks.musicDeck("music");
      }
      console.log(that.Deck.flashcards);
      console.log("You chose the " + that.Deck.flashcardType + " deck\n");
    
      that.queryLoop(0);
  });//end of main inquiry
 
 },

  this.queryLoop = function(queryCounter){
        var that = this;
        if(queryCounter < this.numqueries){
         inquirer.prompt([{
            name:"action",
            message:this.Deck.flashcards[queryCounter].statement,
            type:"list",
            choices:["answer","flip","next","end"]
         }]).then(function(answers){
            if(answers.action === "answer"){
              inquirer.prompt([{
                name:"useranswer",
                message:"whats your guess?"
              }]).then(function(answers){
                if(answers.useranswer.toLowerCase() === that.Deck.flashcards[queryCounter].answer.toLowerCase()){
                 console.log("Awesome !!!!");
                     console.log("Your guess is correct\n");
                }
                else{
                  console.log("seems your guess is not correct !!!");
                  console.log("Correct answer is: " + that.Deck.flashcards[queryCounter].answer);
                }
                that.queryCounter++;
                that.queryLoop(that.queryCounter);
              });

            }// end of answer action
            else if(answers.action === "flip"){
              console.log("The correct answer is: " + that.Deck.flashcards[queryCounter].answer + "\n");
              that.queryCounter++;
              that.queryLoop(that.queryCounter);
            }         
            else if(answers.action === "next"){
              console.log("moving on to next flashcard\n");
                that.queryCounter++;
                that.queryLoop(that.queryCounter);
            }
            else if(answers.action === "end"){
              console.log("looks like you want to exit game\n");

            }


            if(answers.action === "end"){
              inquirer.prompt([{
                name:"exitsignal",
                message:"all guesses used, game finishes now"
              }]).then(function(answers){
                console.log("exiting game bye bye!!!");
              });

           }


         });//all the 4 actions
      }
      else{
        inquirer.prompt([{
          name:"exitprompt",
          message:"all guesses used exiting game now!!"
        }]).then(function(answers){
            console.log("exiting game bye bye!!!");
        });
      }

    }
}


var clicontrol = new Clicontroller();
clicontrol.startGame();