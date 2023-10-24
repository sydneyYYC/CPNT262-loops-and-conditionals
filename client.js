// Title Case a sentence (all words get capitalized for their first letter)

// have a name in an array with two words
const jelly = "box jellyfish";
let jellyCRen = document.querySelector("#capital-slot")
let jellyRRen = document.querySelector("#jelly-spot")

//call function
function capitalizeFirstLetter(str) {
  //will map across each starting at the first and uppercase the first character and add the rest of the characters
  let newStr = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
  // return the capitalized strings and join them with a space
  return newStr.join(" ");
}
//execute / invoke capitalize function
let capitalJelly= capitalizeFirstLetter(jelly);

//render on page
jellyCRen.innerHTML = capitalJelly;
//original string for comparison
jellyRRen.innerHTML = jelly;

// reverse a string problem

//This function uses conditionals instead of for and if/else .

// function to reverse
function reverseString(str) {
  // return a string that '?' if equal to blank return blank otherwise ':' return reverse string using substring and charAt. 
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
// invoke function - enter string in brackets
let revStr = reverseString("My Life");

// render on page
document.querySelector("#reverse-string").innerHTML = revStr;
