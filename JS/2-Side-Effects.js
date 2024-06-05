// Imperative
let name = "Adnan";
let greeting = "Hi";

console.log(`${greeting},${name}`);   // Hi Adnan

name = "fayyaj";
console.log(`${greeting},${name}`);   // Hi fayyaj


// Functional
function greet(greeting2,name2){
    return `${greeting2},${name2}`;
};

console.log(greet("Hi","Suleman"));     // Hi Suleman
console.log(greet("Howdy","Danis"));    // Howdy Danis


// Not Side Effects:
const thesis = {name : "Adnan", date : 2003}; 

function renameThisis(newName){
    thesis.name = newName;
    console.log("Renamed!");   // Renamed!
}

console.log(renameThisis("Adnan-chouhan")); // Adnan-chouhan
console.log(thesis);   // name : Adnan-chouhan , date : 2003

