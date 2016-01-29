//Write a function that takes a single string parameter and returns the string in reverse order
var firstReverse = function (string) {
	var reversedString = '';
	for (var i= string.length - 1; i>=0; i--) {
		reversedString += string[i]
	}
	return reversedString
}

console.log(firstReverse('fatima'));

//Write a function that takes a single string parameter and swaps the case of each character. Allow numbers and symbols to stay the way they are.
var swapCase = function (string) {
	var letter = ''
	for (i=0; i<string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			letter += string[i].toLowerCase()
		}
		else  {
			letter += string[i].toUpperCase()
		}
	}
	return letter


// 	return string
 }
console.log(swapCase('Animals Are cOOl'));

//Takes a single string parameter and returns the first word with the greatest number of repeated letters. If there are no words with repeating letters, return -1
var letterCount = function () {
	
}