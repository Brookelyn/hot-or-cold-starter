
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	 });




  	var randomNumber;
  	var guess;
  	var guessList;
  	var guessCount;
  	var feedback;



  	/*-- Start a new game --*/

  	newGame();

  	$('a.new').click(function() {
  		newGame();
  	});

  	function newGame() {
  		randomNumber = getRandomNumber();
  		guessList = [];
  		guessCount = 0;
  		feedback = 'Make your guess!'
  		guess = '';
  	}



  	/*-- Select a random number between 1 and 100 --*/
  	
	function getRandomNumber() {
  		randomNumber = (Math.floor((Math.random() * 100) + 1));
    }

    getRandomNumber();
  	
  	console.log('Secret number is ' + randomNumber);
  	

  	/*-- Checking guess is valid and posting --*/

 	$("#userGuess").keydown(function (enter) {
 		if (enter.keyCode == 13){
 			checkGuess();
 			postGuess();
 		}
  	});


  	function postGuess() {
  		var guess = $("#userGuess").val("");
  		if(!checkGuess(guess)){
  			guess = '';
  			updateDisplay;
  			return;
  		}
  		guessCount++;
  		guessList.push(guess);
  		userGuess = '';
  		updateDisplay;
  	}


  	function checkGuess(input) {
  		var guess = ($('#userGuess').val());
  		guess = +guess;
  		if((typeof guess != 'number') || (guess % 1 != 0)) {
  			alert('Hey, you need to enter a number!');
  		}
  		else if(guess == NaN) {
  			alert('Sorry, but you really do need to enter a number.')
  		}
   		else {
  			console.log(guess);
  		}
  	}

  	function updateDisplay() {
  		$('#count').text(guessCount);
  	}


  	
 









// alert('hi');




























  	



































});


