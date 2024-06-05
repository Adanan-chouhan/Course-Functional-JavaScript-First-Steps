// immutable : unable to change.
// mutable : the object can be changed.

// by default , the object in javavscript are mutable.

var person = {
    fname : "Adnan",
    lname : "chouhan"
}

Object.seal(person); // not add or delete 
person.age = 20;
console.log(person); //{fname: 'Adnan', lname: 'chouhan'}

// Object.freeze(person); // this method use No modify //
// person.fname = "sahil";
// console.log(person)

Object.defineProperty(person,"fname",{writable:false});  // true use to mutable
person.fname = "sahil";
person.lname = "khan";

console.log(person);


// mutable 
const oldCities = ["Delhi", "Bombay", "Bangalore"];

const newCities = oldCities.map((city) => {
  if (city === "Bombay") return "Mumbai";
  if (city === "Bangalore") return "Bengaluru";
  return city;
});

console.log(newCities); //["Delhi", "Mumbai", "Bengaluru"]
console.log(oldCities); //["Delhi", "Bombay", "Bangalore"]
