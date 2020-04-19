/* let string = "strings";
let sentence = "Hello " + "Junshen";
let sentence2 = " and Ema";
//console.log(sentence + sentence2);
let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP Computer Science";
let teacherName = "Whalen";
const longSentence = `${student1} and ${student2} are amazing and will be taking ${courseName} with ${teacherName}`; //emplate Literal or Template String */

//////////////Number or Integers
/* let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50; */

//////////Booleans
/* let trueStatement = true;
let falseStatement = false; */

//////Null and Undefined
//let Ron; //declared Ron but not defined Ron
//console.log(Ron);
//console.log(Sarah);
///////////Boolean Logic
/* let student = "Caroline";
let age = 15; */
//console.log(student === "Caroline");
//console.log(student === "caroline");
//console.log(age === "15");
/* console.log(age <= 15 || age > 19);
console.log(age <= 15 && age > 19); */

////////If statements
/* let school = "High Sc";
if (school === "Elementary") {
    console.log("You are in k-5");
} else if (school === "Middle") {
    console.log("You are in 6,7 or 8th grade");
} else {
    console.log("you are in HS");
}
let ron = "Ron";
console.log(ron !== "Ema");  */


//////functions
/* function test() {
    console.log("TEST");
}
test(); */

/* function argument(argument) {
    console.log(argument);
}
argument("argument"); */

/* const add = function(x,y) {
    return x + y; //immediately ends the function
};
console.log(add(10,3)); */
/* const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("Bye");
};

const beatles = function() {
    hello();
    bye();
    hello();
    bye();
};
beatles(); */


////scope
/* const name = "Michael y"; //global space
function makeFunc() {
    const name = "Sarah"; //function scope
    function displayName() {
        console.log(name); //inner function can access outer function
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); */


/////arrays
const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran"];
//names.push("Caroline");
names.forEach(el => console.log(el));

/////spread operator
const numbers = [1, 2, 3, 4, 43957690];

const add = function(x,y) {
    return x + y;
};
console.log(add(...numbers));