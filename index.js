// Iteration 1: Names and Input
const hacker1 = "Sasha"
console.log ("The driver's name is " + hacker1 + ".") 

const hacker2 = "Vincent"
console.log ("The navigator's name is " + hacker2 + ".")

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ("THe driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker2.length > hacker1.length) {
    console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

// Iteration 3: Loops
//3.1 

// for (let i = 0; i < hacker1.length; i++) {
//     console.log (hacker1[i].toUpperCase())
// }

console.log(hacker1.toUpperCase().split("").join(" "))

//3.2 
console.log(hacker2.split("").reverse().join(""))

//3.3 

if (hacker1 > hacker2) {
    console.log ("The driver's name goes first.")
}
else if (hacker2 > hacker1) {
    console.log ("Yo, the navigator goes first definitely.")
} else { 
    console.log ("What?! You both have the same name?")
}
