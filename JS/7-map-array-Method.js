// use mathmatic task perform
const ary = [11,4,9,16];
console.log(ary);

const a = ary.map(test);
console.log(a);   // [110,40,90,160]

function test(x){
    return x * 10;
};

const b = ary.map((value)=>{
    return value + 10;
})

console.log(b);   // [21,14,19,26]

const names = ["adnan","sulman","sahil","muijahid","arbaaz"];
const addName = names.map(sayHi);

function sayHi(arr){
console.log(`Hello, ${arr}`);
}

