// function Iteration =>
function sum(numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum([0, 1, 2, 3, 4])); // 10


// Recursion function => 
function sumNum(num) {
    if (num.length === 1) {
        // base case
        return num[0];
    } else {
// resusive case
return num[0] + sum(num.slice(1));
    }
}

console.log(sumNum([0,1,2,3,4]));  // 10


// Example => 
function factorial(n) {
    // Base case: Agar n 0 ya 1 hai, to factorial 1 hota hai
    if (n === 0 || n === 1) {
      return 1;
    } 
    // Recursive case: n ko n-1 ke factorial se multiply karte hue call karna
    else {
      return n * factorial(n-1);
    }
  }
  
  // Factorial of 5
  console.log(factorial(5)); // Output: 120