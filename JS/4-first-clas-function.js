// first class function is tha thrre Points

// Assigning a function to a variable
const a = function(){
    console.log("thi is a function in a varaible !");
}
a();

// Passing a function as an argument
function an(){
    return "This is 1st class"
}

function main(fun,funname){
    console.log(fun(),funname);
}

main(an,"function"); // This is 1st class function

// Returning a function
function b(){
    return function c(){
        console.log("This is function b");
    }
};

b()(); // This is function b

var x = b(); // Example 
x();

