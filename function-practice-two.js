//takes a single object argument and returns the value of the 'name' property of the given object
console.log('1.')

var getName = function (janeDoe) {
	return janeDoe.name
}

console.log(getName({name: 'Jane Doe',
	age: 37,
	occupation: 'professor'}))

//takes an array of strings and returns the total number of letters in all strings
console.log('2.')

var totalLetters = function (stringArray) {
	var result = 0
	for (i=0; i<stringArray.length; i++) {
		var wordLength = stringArray[i].length
		result += wordLength
	}
	return result
	}

console.log(totalLetters(['this', 'is', 'the', 'sentence', 'of', 'which', 'you', 'wanted', 'to', 'know', 'the', 'length']))

//takes two arguments and returns a new object with a key of the first argument and the value of the second argument
console.log('3.')

var keyValue = function (a, b) {
	var object = {}
	object[a] = b
	return object 
}

console.log(keyValue('city', 'Denver'));

//takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular. Ex. arr.length+number
console.log('4.')

var negativeIndex = function (array, n) {
	return array[array.length + n]
}

console.log(negativeIndex(['book 0', 'book 1', 'book 2', 'book 3', 'book 4'], -2));

//takes a single string argument and removes all 'm' characters from the string. Won't modify the function.
console.log('5.')

var removeM = function (a) {
	a = a.replace('M', '');
	return a.replace ('m', '');

}

console.log(removeM('Madame'));

//takes a single object argument and console.log's each key-value pair in the format 'key is value' on separate lines
console.log('6.')

var printObject = function (object) {
	for (var key in object) {
		console.log (key + ' is ' + object[key])

	}
	console.log 
}

console.log(printObject({a: 10, b: 20, c: 30}));

//takes a string and returns an array of all the vowels in the string, including duplicates
console.log('7.')

var vowels = function (input) {
	var vowelArray = [];
	for (var i=0; i<input.length; i++) {
		if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i'|| input[i] === 'o'|| input[i] === 'u') {
			vowelArray.push(input[i]);
		}
	}	
	return vowelArray
}

console.log(vowels('madame'));

//takes an array and returns true if every adjacent pair of items in the array is the same
console.log('8.')

var twins = function (array) {
	if (array.length % 2 !== 0) {
		return false
	}
	for (i = 0; i<array.length; i+2) {
		if (array[i] !== array[i+1]) {
			return false
			// 	return true
			// } else {return false} 	
	}
	
	var lastTwoElements = array.slice(-2)
	for (i=0; i<1; i++) {
		if (lastTwoElements[i] !== lastTwoElements[i+1]) {
			return false
		}
		else {return true}
	}
	}
}

console.log(twins(['something', 'something', 'word', 'word', 'yourface', 'yourface', 'wisdom']));

//takes an array of booleans and returns true if any one of them is true. Returns false if it's given an empty array. 
console.log('9.')

var or = function(booleanArray) {
	for (var i = 0; i<booleanArray.length; i++) {
		if (booleanArray[i] == true) {
			return true;
		}
	}
	return false	
}

console.log(or([false, false, false, false, true]));

//takes an array of strings and returns a new array consisting of the unique values. Should only return one of each value. 
console.log('10.')

var unique = function (array) {
	var newArray = [];

	for (var i=0; i<array.length; i++) {
		if (newArray.indexOf(array[i]) === -1) 
			newArray.push(array[i]);
	}
return newArray
}

console.log(unique(['fatima', 'razvi', 'fatima']));

































