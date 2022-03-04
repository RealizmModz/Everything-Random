function randomNumber(min,max,round) {
	try {
		if(typeof min != "number" || typeof max != "number") return console.log('Please enter the minimum and maximum number to get a random in between!');
		if(!round) { round = false;}
		if(typeof round != "boolean") return console.log('Enter a boolean!');
		
		if(round == true) {
			return Math.round(min + Math.random() * (max - min));
		}
		else {
			return min + Math.random() * (max - min);
		};
	}
	catch(error) {
		console.log(error);
	};
};

function randomArrayObject(array) {
	try{
		if(!array) return console.log("You need to enter the array!")
		if(typeof Array.isArray(array) == false) return console.log('This must be an array!');

		const index = Math.round(0 + Math.random() * (array.length));

		return array[index];
	}
	catch(error) {
		console.log(error);
	}
}

function randomRGB() {
	try {
		let R = Math.floor(Math.random() * 254 + 1);
		let G = Math.floor(Math.random() * 254 + 1);
		let B = Math.floor(Math.random() * 254 + 1);

		return `${R},${G},${B}`;
	}
	catch(error) {
		console.log(error);
	};
};

exports.randomNumber = (min,max,round) => {
	return randomNumber(min,max,round);
};

exports.randomArrayObject = (array) => {
	return randomArrayObject(array);
};

exports.randomRGB = () => {
	return randomRGB();
};