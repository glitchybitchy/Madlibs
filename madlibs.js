var myStory = 'Once upon a time there was a [adjective] [noun]. It was really [adjective]. It liked to [verb] all day. One day, it went to [place] to meet [person]. To get there, it rode in a [vehicle], but on the way there, the [vehicle] crashed.  It had to walk the rest of the way.'

var someAdjectives = ['beautiful', 'nasty', 'eloquent', 'purple', 'rumbunctious', 'shady'];
var someNouns = ['goat', 'lamp', 'candy', 'shovel', 'monster truck', 'computer'];
var somePeople = ['Mabel', 'Charlie', 'Gruncle Stan', 'Frodo', 'Princess Bubblegum', 'Bill Cypher' ];
var somePlaces = ['Candy Kingdom', 'Gravity Falls', 'Philadelphia', 'Mordor', 'Rivendell', 'Essex' ];
var someVerbs = ['eat', 'run', 'bounce', 'laugh', 'sing', 'sleep'];
var someVehicle = ['car', 'buffalo', 'unicycle', 'train', 'boat', 'manbearpig'];

// var myArrays = [ '[adjective]', '[noun]', '[place]', '[person]', '[vehicle]', '[verb]' ];

//Since all arrays have the same length I made a random index variable
var randomIndex = Math.floor((Math.random() * 6));

var randomAdjective = someAdjectives[randomIndex];
var randomNoun = someNouns[randomIndex];
var randomPeople = somePeople[randomIndex];
var randomPlace = somePlaces[randomIndex];
var randomVerb = someVerbs[randomIndex];
var randomVehicle = someVehicle[randomIndex];


// for(var i = 0; i<6; i++){

// 	myStory.replace(myArrays[i],'REPLACED');
// }
// Tried a for loop but it didn't work


//  console.log(myStory);

//I was trying to replace to come up with a way to swap the words with a random word that corresponded to it but this is far as I got...

 console.log(myStory.replace(/adjective|noun|person|place|verb|vehicle/g, 'REPLACED'));
