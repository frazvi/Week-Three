//Global array called students, defined as follows:
var students = [{name: 'Liz', age: 25, city: 'Boulder'},
				{name: 'Meghan', age: 27, city: 'Denver'},
				{name: 'Trent', age: 32, city: 'Boulder'},
				{name: 'Chelsea', age: 24, city: 'Boulder'},
				{name: 'Amir', age: 18, city: 'Denver'}];	

//Print the ages
for (var i=0; i<students.length; i++) {
	console.log(students[i].age);
}

//Print name, city
for (var i=0; i<students.length; i++) {
	console.log(students[i].name + ', ' + students[i].city);
}

//Print 'name is from city' for all students who are from Boulder
for (var i=0; i<students.length; i++) {
	if (students[i].city == 'Boulder')
	console.log(students[i].name + ' is from ' + students[i].city);
}

//Print 'name is older than 25' for all students who are older than 25
for (var i=0; i<students.length; i++) {
	if (students[i].age > 25)
		console.log(students[i].name + ' is older than 25');
}
				