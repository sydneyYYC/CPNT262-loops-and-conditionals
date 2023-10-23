// Title Case a sentence (all words get capitalized for their first letter)
// splice the two together
// im gunna use jellyfish cause i think theyre cute :> hehe

// have a name in an array with two words
const jelly = "box jellyfish";


//call function
function capitalizeFirstLetter(str) {
  //will map across each and uppercase the first character and add the rest
  //this one does all of the things from attempt 2 but uses word differently and combines them alk into one line of code WOW 
  return str.split(" ").map((word) =>word[0].toUpperCase() + word.slice(1).join(" "));
}
//execute / invoke function
capitalizeFirstLetter(jelly);

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

// problem 2 