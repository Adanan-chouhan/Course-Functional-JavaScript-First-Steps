// check condition and return New arrya
const ages = [40, 12, 19, 10, 80, 4];
console.log(ages);

const a = ages.filter(checkAdult);
console.log(a);   // [40,19,80]

function checkAdult(age) {
    return age >= 18;
}

const b = [1, 0, 30, 37, 91, 10, 27, 3];
const c = b.filter((e) => {
    return e < 10
}
);

console.log(c); // [1,0,3]

const names = ["adnan", "sulman", "sahil", "muijahid", "arbaaz"];
const cheak = names.filter(cheakNames);

function cheakNames(name) {
    return name.length <= 5;
}

console.log(cheak); // ["adnan",sahil]



