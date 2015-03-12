
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
  		getRandomNumber();
  		guessList = '';
  		guessCount = 0;
  		feedback = 'Make your guess!'
  		guess = '';
  	}



  	/*-- Select a random number between 1 and 100 --*/
  	
	function getRandomNumber() {
  		randomNumber = (Math.floor((Math.random() * 100) + 1));
    }
  	
  	console.log('Secret number is ' + randomNumber);
  	

  	/*-- Checking guess is valid and posting --*/

 	$("#userGuess").keydown(function (enter) {
 		if (enter.keyCode == 13){
 			postGuess();
 		}
  	});


  	function postGuess() {
  		var guess = $("#userGuess").val("");
  		var listItem = '<li>' + guess + '</li>'
  		console.log(guess);
  		$('#guessList').empty();
  		$('#guessList').append(listItem);

  		
  	}


  	// function checkGuess(input) {
  	// 	var guess = ($('#userGuess').val());
  	// 	guess = +guess;
  	// 	var checking = true;
  	// 	if((typeof guess != 'number') || (guess % 1 != 0)) {
  	// 		checking = false;
  	// 		alert('Hey, you need to enter a number!');
  	// 	}
  	// 	else if(guess == NaN) {
  	// 		checking = false;
  	// 		alert('Sorry, but you really do need to enter a number.')
  	// 	}
   // 		else {
  	// 		console.log(guess);
  	// 		return;
  	// 	}
  	// }

  	// function updateDisplay() {
  	// 	$('#count').text(guessCount);
  	// }


  	
 









// alert('hi');




























  	



































});


