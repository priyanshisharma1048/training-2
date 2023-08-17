
//  1. print sum of all  number from 1 to 10
let sum=0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum)

// 2. print only even indexing value of an array through loop
const array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i <=10; i++) {
  if (i % 2 !== 0) {
    console.log(array[i]);
  }
}
// 3.print an all keys through loops
let person={
    fname:"x",
    lname:"y",
    age:20,
};

for (let p in person) {
 console.log(person[p])
}

// 4.print your name priyanshi like ["p", "r", "i", "y", "a", "n", "s", "h", "i"]
let name = "priyanshi";
let nameArray = [];
let length=9
for (let i = 0; i < length; i++) {
  nameArray.push(name[i]);
}
console.log(nameArray);

