// Title Case a sentence (all words get capitalized for their first letter)
// splice the two together
// im gunna use jellyfish cause i think theyre cute :> hehe

// have a name in an array with two words
const jelly = "box jellyfish";
// split into two words and invoke the function across all words
const newArr = jelly.split(" ").map(capitalizeFirstLetter);
const capitalizeJelly = newArr.join(" ");

jelly[0].toUpperCase() + jelly.slice(1);

//call function
function capitalizeFirstLetter(str) {
  //will map across each and uppercase the first character and add the rest
  str[0].toUpperCase() + str.slice(1).toLowerCase();
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

