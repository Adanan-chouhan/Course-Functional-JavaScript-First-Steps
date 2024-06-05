// currying function 

function add(a){
    return function(b){
        return function(c){
            return a + b + c; 
        };
    };
};

console.log(add(2)(4)(10));

//  1 ==> Example

function fullName(bio){
    return function(firstName){
        return function(lastName){
console.log(`i am ${bio} my name is ${firstName} ${lastName}`);
        }
    }
}
console.log(fullName("student")("adnan")("chouhan"));


// 2 ==> Example
function curryGreeet(greeting){
    return function(name){
        return `${greeting} , ${name} `;
    }
};

const greetItal = curryGreeet("Hello");
console.log(greetItal("Adnan")); // Hello Adnan

const greetText = curryGreeet("Howdy") ;
console.log(greetText("Arbaaz")); // Howdy Arbaaz


// 3 ==> Example 
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)); // Output: 6

