// Console log a welcome message with instructions to mad libs
console.log("Welcome to Mad Libs!,you will have to enter some words to create a story.")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let pluralnoun = prompt("Give me a Plural noun")
let verb = prompt("Give me a Verb")
let adjective2 = prompt("Give me another adjective")


// Create an array that stores the values the user entered

let madlibarray = []
madlibarray.push(adjective)
madlibarray.push(pluralnoun)
madlibarray.push(verb)
madlibarray.push(adjective2)
console.log(madlibarray)

// Console log the story with the array values passed into the blanks
console.log(`In a small ${madlibarray[0]} school in the Bronx, there was a problem with too many ${madlibarray[1]}.These ${madlibarray[1]} loved to ${madlibarray[2]}, which caused Mr. P so many headaches.However,no one wated to remove them because they were too ${madlibarray[3]} so they stayed there forever `)


// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

let adjective3 = prompt("Give me an adjective")
let pluralnoun2 = prompt("Give me a Plural noun")
let verb2 = prompt("Give me a Verb")
let adjective4 = prompt("Give me another adjective")

let madlibarray2 = []
madlibarray2.push(adjective3)
madlibarray2.push(pluralnoun2)
madlibarray2.push(verb2)
madlibarray2.push(adjective4)
console.log(madlibarray2)

console.log(`Francisco got a bruise and it was very ${madlibarray2[0]}  ${madlibarray2[1]} decided to help but 
${madlibarray2[1]} failed to help,which caused Francisco to ${madlibarray2[2]} so the bruise became a ${madlibarray2[3]} bruise.`)






