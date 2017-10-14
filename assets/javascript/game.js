// var userTotal = crystals 1-4 total clicks
// append wins & losses number to their respective id's
// return Math.floor(Math.random() * (max - min)) + min;
// reset function for numbers but keeps score

$(document).ready(function() {

	var totalPoints = 0;
	var wins = 0;
	var losses = 0;
	
	var bigRandomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	
	$("#randomNumber").html(bigRandomNumber);

	var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var purpleNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	$("#totalWins").html("Wins: " + wins);
	$("#totalLosses").html("Losses: " + losses);
	$("#totalScoreNumber").html(totalPoints);

	function reset() {
		bigRandomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#randomNumber").html(bigRandomNumber);
		blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		purpleNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		totalPoints = 0;
		$("#totalScoreNumber").html(totalPoints);
	};

	function win() {
		wins++;
		$("#announcement").html("You win!");
		$("#totalWins").html("Wins: " + wins);
		reset();
	}
	

	function loss() {
		losses++;
		$("#announcement").html("You lose!");
		$("#totalLosses").html("Losses: " + losses);
		reset();
	}

	$("#one").on("click", function() {
		totalPoints = totalPoints + blueNumber;
		$("#totalScoreNumber").html(totalPoints);
		if (totalPoints == bigRandomNumber) {
			win();
		} else if (totalPoints > bigRandomNumber) {
			loss();
		};
	});

	$("#two").on("click", function() {
		totalPoints = totalPoints + redNumber;
		$("#totalScoreNumber").html(totalPoints);
		if (totalPoints == bigRandomNumber) {
			win();
		} else if (totalPoints > bigRandomNumber) {
			loss();
		};
	});

	$("#three").on("click", function() {
		totalPoints = totalPoints + greenNumber;
		$("#totalScoreNumber").html(totalPoints);
		if (totalPoints == bigRandomNumber) {
			win();
		} else if (totalPoints > bigRandomNumber) {
			loss();
		};
	});

	$("#four").on("click", function() {
		totalPoints = totalPoints + purpleNumber;
		$("#totalScoreNumber").html(totalPoints);
		if (totalPoints == bigRandomNumber) {
			win();
		} else if (totalPoints > bigRandomNumber) {
			loss();
		};
	});
});







