var Card = require("./card");

var flashcardinfo = {
	technology:[{query: "Number of bits in a byte",
	             answer:"Eight"},
	            {query:"inventor of javascript",
	             answer:"Brendan Eich"},
	            {query: "What is CSS used for",
	             answer:"Styling"},
	            {query:"what is the base application protocol of AJAX",
	             answer:"HTTP"},
	            {query:"who invented python programming language",
	             answer:"guido vanrossum"}],
	music: [{query: "who is the famous DJ musician from Sweden",
	        answer:"Avicii"},
	       {query:"what is the genre of the band caspian",
	        answer:"postrock"},
	       {query:"The track adagio for strings is composed by whom?",
	        answer:"tiesto"},
	       {query:"who leads the band God is an astronaut",
	        answer:"Torsten Kinsella"},
	       {query:"Which is the famous classic rock band from UK",
	        answer:"The Beatles"}],
	sports:[{query:"Kobe Bryant plays for which basketball club team",
	         answer:"LA LAKERS"},
	        {query:"Name an outstanding swiss tennis player",
	         answer:"Roger Federer"},
	        {query:"Famous soccer player lionel messi is from which country",
	         answer:"Argentina"},
	        {query:"Who is the most successful chess player from Russia",
	         answer:"Gary Kasparov"},
	        {query:"Do you know the swimmer from USA who was outstanding in beijing olympics",
	         answer:"Michael Phelps"}]
};



function Deck(flashcardType){
    	this.flashcardType = flashcardType;
    	this.flashcards = [];
    	this.counter = 0;
        for(var i=0;i < flashcardinfo[flashcardType].length;i++){
         this.flashcards.push(new Card(flashcardinfo[flashcardType][i].query,
         	                  flashcardinfo[flashcardType][i].answer));
        }
}



function techDeck(flashcardType){
	Deck.call(this,flashcardType);
	//this.type = "technology";
}


techDeck.prototype = Object.create(Deck.prototype);
techDeck.prototype.constructor = techDeck;



function musicDeck(flashcardType){
	Deck.call(this,flashcardType);
	//this.type = "music";
}

musicDeck.prototype = Object.create(Card.prototype);
musicDeck.prototype.constructor = musicDeck;




function sportsDeck(flashcardType){
	Deck.call(this,flashcardType);
	//this.type  = "sports";
}

sportsDeck.prototype = Object.create(Deck.prototype);
sportsDeck.prototype.constructor = sportsDeck;

module.exports = {
	techDeck:techDeck,
	sportsDeck:sportsDeck,
	musicDeck:musicDeck
};