
//Function is started when button is clicked
document.querySelector('.btn').addEventListener('click', function () {
	var whiteBalls = [0, 1, 2, 3, 4];//An array for the white balls is created.
	for (var i = 0; i < whiteBalls.length; i++) {//Loops through array one by one
		var number = Math.floor(Math.random() * 70) + 1;//For each iteration a random number between 1 and 70 is created 
		document.querySelector('#ball-' + whiteBalls[i]).textContent = number;//HTML of corresponding ball is updated with random number
	}

	var yellowBall = Math.floor(Math.random() * 25) + 1;//A variable for the yellow ball is created containing a random number between 1 and 25
	document.querySelector('#ball-5').textContent = yellowBall;//HTML of yellow ball is updated with random number
})