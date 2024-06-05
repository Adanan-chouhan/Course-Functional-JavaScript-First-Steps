// reduce Method
const arr = [1,2,3,4,5];
console.log(arr);

const total = arr.reduce(sum,0);

function sum(accumulator,value){
return   accumulator + value;
}

console.log(total); // 15

const nameArr = ["my","name","is","Adnan","Chouhan"];
console.log(nameArr);

const addname = nameArr.reduce(sumName);

function sumName(accumulator,value){
  return accumulator + " " +  value;
}

console.log(addname) // my name is Adnan chouhan

const a = [1,2,3,4,5];
const b = a.reduce((accumulator,value)=>{
  return   accumulator += value
});

console.log(b);

