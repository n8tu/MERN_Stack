var hello = 'world'
console.log(hello);

// output is "world"

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//output is "magnet"


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//output is "super cool"

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//output is "chicken" "half-chicken"

console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);


//output is "chicken" "fish" "chicken"


var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


//output is "disco" "rock" "r&b" "disco"

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//output is "san jose" "seattle" "burbank" "san jose"





