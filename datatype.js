// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// 1."We have assigned a string to a variable."
let storeName="pandyastore sons and daughter"
let numberofMembers="4"


//2. "Here, we have assigned an empty array."
let array=[]


//3. "We have assigned another object inside an object."
let member={
    "firstmember":"sumanpandya",
    "secondmember":"natashapandya",
    "thirdmember":"sheshpandya",
    "fourthmember":"mitthupandya",
    "work":{
        "first":["lacture dena"],
        "second":["storehandle"],
         "third":["ladai karna"],
        "fourth":["darpok"]
    }
}


// // 4."We have printed both objects inside an empty array."
array.push(member)
console.log(array)


//5. one more key add in member object
member.fifthmember="chiku"
console.log(member)

// 6.only print firstmember
let firstMember=member["firstmember"]
console.log(firstMember)


// 7.only print work's first key in member object
let w=member["work"]["first"]
console.log(w)

//8.here we ADD storename and no.of members
let add=[storeName+"  "+numberofMembers]
console.log(add)

// 9.
array.push(member)
console.log(array)
array.unshift="goutampandya"
console.log(array)

// second part of practice
// array
// a.
let p="shaurya"
let y="sharma"
let schoolName="christ"
let age=10
let birthday=7
let result=(p+" "+y)
console.log(result)
let a=(age-birthday)
console.log(a)
// b.
let array1=[]
array1.push(p,y,schoolName,age,birthday)
console.log(array1)
// c.
array1[0]="duggu"
console.log(array1)
// d.
array1.unshift("brother")
console.log(array1)
// e.
array1.splice(0,2)
console.log(array1)
// f.
array1.splice(1,0,p)
console.log(array1)
// g.
let variable=array1[3]
console.log(variable)


// function
function great(salary,rollno){
    let price=2000
    let  workers=50
    let time=9
    let total=("the price is"+" "+" " +price+" "+"and workers is"+" "+workers+" "+"\n"+"and time is"+" " +time+" "+salary+" "+rollno)
    console.log(total)
}
great(6000,123)
// counting
let counting=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let lastElement=counting.pop()
console.log(counting)
console.log(lastElement)
let secondlastElement=counting.pop()
console.log(counting)
console.log(secondlastElement)
let slice= counting.slice(4,10)
console.log(slice)
counting.splice(13,1)
console.log(counting)

