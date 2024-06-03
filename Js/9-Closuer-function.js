// closure function
function makeAdjectifier(adjective){
    return function(noun){
        return adjective + " " + noun;
    };
};

const coolify = makeAdjectifier("cool");

console.log(coolify("workShop")); // cool workShop
console.log(coolify("drink"));    // cool drink

// closure function 
function fullName(Name){
    return function(lastName){
        return Name + "-" + lastName
    };
};
const Name = fullName("Adnan");
console.log(Name("chouhan"));

// closure function 
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const increment = outer();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3