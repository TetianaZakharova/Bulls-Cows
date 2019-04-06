
function getNum() {
	let number = [];

	while (number.length < 4) {
		let newNum = Math.floor(Math.random () * 10);
		if (number.indexOf(newNum) < 0 ) {
			number.push(newNum);
		}
		
	}
	console.log(number);
	return number;
};

let goal = getNum();

function guess() {
	let playersNumber = document.querySelector('#player').value;
	let arr = [];

	for (let i = 0; i < 4; i++) {
		let newUserArrElement = parseInt(playersNumber.substr(i, 1));
		arr.push(newUserArrElement);
	}

	check(arr);
};

function check(par) {
	let bulls = 0;
	let cows = 0; 
	
	for (let i = 0; i < 4; i++) {
		if (par[i] === goal[i]) {
			bulls ++;
		} else if (goal.indexOf(par[i]) >= 0) {
			cows ++;
		}
	}

	if (bulls == 4) {
		let status = ' win';
		endGame(par, status);
	}
	writeTurn(par, bulls, cows);
};

function writeTurn(par, bulls, cows) {
	let table = document.querySelector('.turnsList');
	let newLine = document.createElement('p');
	newLine.innerHTML = '<span class="guessed">' + par + ' быки: ' + bulls + '; коровы: ' + cows;
	table.appendChild(newLine);
};

function endGame(par, status) {
	document.querySelector('.number').innerHTML = goal;
	alert('УРА!!! Ты угадал :) '+ '\r\nЗагаданное число: ' + goal);
};

