// Title Case a sentence (all words get capitalized for their first letter)
// splice the two together
// im gunna use jellyfish cause i think theyre cute :> hehe

// have a name in an array with two words
const jelly = "box jellyfish";
console.log(jelly);

//call function
function capitalizeFirstLetter(str) {
  //will map across each and uppercase the first character and add the rest
  //this one does all of the things from attempt 2 but uses word differently and combines them alk into one line of code WOW 
  return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).join(" "));
}
//execute / invoke function
let capitalJelly= capitalizeFirstLetter(jelly);
//render on page
document.querySelector("#capital-slot").innerHTML = capitalJelly;

document.querySelector("#jelly-spot") .innerHTML = jelly;


// so this gives us an uppercase first letter of each but the problem is it returns undefined with the first letter
// for (let i = 0; i < newArr.length; i++) {
//   newArr[i] = newArr[i][0].toUpperCase();
//   console.log(newArr);
// }

// my code cannot access the substring this way 

// + newArr[i].substr(1);

//attempt # 2

// jelly = "box jellyfish"
// split into two words and invoke the function across all words
// const newArr = jelly.split(" ").map(capitalizeFirstLetter);
//join words with a space
// const capitalizeJelly = newArr.join(" ");



// problem 2 reverse a string

// 1. make a string that will hold the value of the return string
// function reverseAString(str) {

//   let revStr = "";

//   // step two break the string in a conditional loop that will start at -1 
//   // the string begins at -1 - the last letter and will decrease through all letters 
//   for (let i = str.length - 1; i >= 0; i--)
//   // the reverse string is the string plus its reversed self
//   newString = newString + str[i];
//   return newString;
// }

// reverseAString("why god");


function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  document.querySelector("#reverse-string").innerHTML = this;
}
reverseString("hello");
