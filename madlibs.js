var myStory = 'Once upon a time there was a [adjective] [noun]. It was really [adjective]. It liked to [verb] all day. One day, it went to [place] to meet [person]. To get there, it rode in a [vehicle], but on the way there, the [vehicle] crashed.  It had to walk the rest of the way.'

var someAdjectives = ['beautiful', 'nasty', 'eloquent', 'purple', 'rumbunctious', 'shady'];
var someNouns = ['goat', 'lamp', 'candy', 'shovel', 'monster truck', 'computer'];
var somePeople = ['Mabel', 'Charlie', 'Gruncle Stan', 'Frodo', 'Princess Bubblegum', 'Bill Cypher' ];
var somePlaces = ['Candy Kingdom', 'Gravity Falls', 'Philadelphia', 'Mordor', 'Rivendell', 'Essex' ];
var someVerbs = ['eat', 'run', 'bounce', 'laugh', 'sing', 'sleep'];
var someVehicle = ['car', 'buffalo', 'unicycle', 'train', 'boat', 'manbearpig'];

var randomIndex = Math.floor((Math.random() * 6) + 1);

console.log(myStory.replace('[adjective]','cool'));