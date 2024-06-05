// Pure function
// Pure functions return the same output if we use the same input parameters.

function greet(name) {
    console.log(`Hello,${name}!`);
}

greet("suleman");       // Hello suleman 
greet("sahil");         // Hello sahil
greet("mujahid");       // Hello mujahid

// 1 => Examaple
function fullName(fname, lname) {   // same input perameter
    return console.log(fname, lname);
}

fullName("adnan", "chouhan");   // same output
fullName("arbaaz", "khan");

// 2 => Example 
function add(a, b) {
    return console.log(a + b);
}
add(10, 10);   // 20
add(10, 90);   // 100

// impure function 
// However, impure functions give different outcomes when we pass the same arguments multiple times. Pure functions always return some results. Impure functions can execute without producing anything.

// 1 => Example 
let Name = "Adnan";

function Namefun(){
    console.log(`hello , ${Name}`);
}

Namefun();

Name = "Arbaaz";   //  different outcomes

Namefun();    //  when we pass the same arguments multiple times

// 2 => Example
let num1 = 10

function multipley(num2) {
    return console.log(num1 * num2);
  }
  multipley(10);   // 10 * 10 = 100
  multipley(2);    // 10 * 2 = 20

  num1 = 2;
  multipley(2);   // 2 * 2 = 4


