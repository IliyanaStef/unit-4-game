$(document).ready(function() {
	var targetScore;
	var yourScore = 0;
	var wins = 0;
	var losses = 0;
	var blue;
	var green;
	var yellow;
	var pink;

	function newNumbers() {
		targetScore = Math.floor(Math.random() * 120) + 1;
		blue = Math.floor(Math.random() * 12) + 1;
		green = Math.floor(Math.random() * 12) + 1;
		yellow = Math.floor(Math.random() * 12) + 1;
		pink = Math.floor(Math.random() * 12) + 1;
	}

	function newGame() {
		newNumbers();
		yourScore = 0;
		$("#targetScore").text(targetScore);
		$("#yourScore").text(yourScore);
		$("#blue").attr("crystalValue", blue);
		$("#green").attr("crystalValue", green);
		$("#yellow").attr("crystalValue", yellow);
		$("#pink").attr("crystalValue", pink);
		$("#wins").text(wins);
		$("#losses").text(losses);
	}

	newGame();

	$(".crystalimg").on("click", function() {
		if (yourScore >= targetScore) {
			return;
		}

		var crystalValue = $(this).attr("crystalValue");
		crystalValue = parseInt(crystalValue);
		yourScore += crystalValue;
		$("#yourScore").text(yourScore);

		if (yourScore === targetScore) {
			youWin();
		} else if (yourScore > targetScore) {
			youLose();
		}
    });
    
    function youWin() {
		$("#result").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#result").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	$(".btn").on("click", function() {
        $("#result").text("");
		newGame();
	});

});