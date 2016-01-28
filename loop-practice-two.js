// //animal list 
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// //print all
for (var i=0; i<animals.length; i++) {
	console.log(animals[i])
}

// //print first four
for (var i=0; i<animals.length - 1; i++) {
	console.log(animals[i])
}

// //print odd
for (var i=0; i<animals.length; i++) {
	if (i % 2 === 0) {
		console.log(animals[i])
		}
	}

//print in reverse order
var animalsReverse = animals.reverse ()
for (i=0; i<animals.length; i++) {
	console.log(animalsReverse[i])
}

// print all but the first and last element twice
for (i=0; i<animals.length; i++) {
	console.log(animals[i]);
	if (i < animals.length-1 && i > 0) {
		console.log(animals[i])
	}
}

