
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	 });

  	/*--- New game click support ---*/
  	$('a.new').click(function() {
  		newGame();
  	});

 
 	/*-- Posting guess button --*/
   	$('#guessButton').click(function(event) {
  		event.preventDefault();
  		postGuess();
  	});

  


  	var randomNumber;
   	var guessCount;
  	var feedback;
  	var guess;



  	/*-- Start a new game --*/
  	newGame();

  	function newGame() {
  		var randomNumber = getRandomNumber();
	  	console.log('Secret number is ' + randomNumber);
	  	guessCount = 0;
	  	$('#guessList').html('');
	  	$('#count').html('0');
  		$('#feedback').html('Make your guess!');
  		$('#userGuess').prop('disabled', false);
  		$('#userGuess').attr('placeholder','Make your guess!');

  	}



  	/*-- Select a random number between 1 and 100 --*/
	function getRandomNumber() {
  		return (Math.floor((Math.random() * 100) + 1));
    }
  	

  	/*-- Post the guess --*/
  	function postGuess() {
  		var guess = $("#userGuess").val();
  		guess = +guess;
  		if(checkGuess(guess)) {
  			var listItem = '<li>' + guess + '</li>';
  			$('#guessList').append(listItem);
  			incCounter();
  		}
  		guessDiff();
  		alert(guessDiff);
  		giveFeedback();
  		$('#userGuess').val('');
  	}


  	/*-- Check the guess is valid --*/
  	function checkGuess(guess) {
  		var checking = true;
  		if((typeof guess != 'number') || (guess % 1 != 0)) {
  			checking = false;
  			alert('Hey, you need to enter a number!');
  		}
  		else if(guess == NaN) {
  			checking = false;
  			alert('Sorry, but you really do need to enter a number.')
  		}
  		else if((guess < 1) || (guess > 100)) {
  			checking = false;
  			alert('Please enter a number between 1 and 100');
  		}
   		else {
  			checking = true;
  		}
  		return checking;
  	}


  	/*-- Incrementing counter up --*/
  	function incCounter() {
  		guessCount++;
  		$('#count').text(guessCount);
  	}




  	/*-- Providing feedback on the guesses --*/
 
function guessDiff(randomNumber, guess) {
	if(randomNumber > guess){
		guessDiff = randomNumber - guess;
	}
	else if (guess > randomNumber) {
		guessDiff = guess - randomNumber;
	}
	return guessDiff;
	alert(guessDiff);
}


function giveFeedback(guessDiff){
	var feedbackElement = $('#feedback');
	
	if(guessDiff == 0){
		feedbackElement.html('You got it! Well done!');
		$('#userGuess').prop('disabled', true);
		$('#userGuess').attr('placeholder','Game over!');
	}
	
	else if(guessDiff > 50) {
		feedbackElement.html("I'm freezing!");
	}
	else if(guessDiff > 40) {
		feedbackElement.html(" Brrr, it's cold!");
	}	
	else if(guessDiff > 30) {
		feedbackElement.html(" Does it feel chilly to you?");
	}
	else if(guessDiff >  20) {
		feedbackElement.html("Warming up...");
	}
	else if(guessDiff > 10) {
		feedbackElement.html("It's getting hotter..");
	}
	else if(guessDiff > 5)  {
		feedbackElement.html("I'm boiling!");
	}
}



  	
 






































  	



































});


