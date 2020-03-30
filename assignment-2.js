/* 
Challenge 1
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
Using the above array filter out all students whose names contain
less than 5 characters 
*/

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
const output = students.filter(students => students.length < 5);
console.log(output);

/*
Challenge 2
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
Using the above array check to see if the array includes “junshen”
Write a seperate function to check if “Alan” or “Savva” were included in some of the array
USE MDN to find the appropriate array methods
*/

function check(target) {
  console.log(students.includes(target));
}
check("junshen");
check("Alan");
check("Savva");