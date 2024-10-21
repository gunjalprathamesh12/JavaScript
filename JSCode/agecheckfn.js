console.log("Hey user pls enter your age pls ");
var age = prompt("age=");
age = parseInt(age);

function agecheck() {
  
  if (age < 18) {
    console.log("You are not Adult");
  } else {
    console.log("You are adult");
  }
}
