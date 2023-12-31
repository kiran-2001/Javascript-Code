
let score = "33"
let score1 = "abc77"

console.log(typeof score);

let valueInNumber = Number(score);
let value = Number(score1)
console.log(typeof valueInNumber)
console.log(typeof value)

console.log(value);
console.log(valueInNumber);


// "33" => 33
//"abc77" => NaN
// true  => 1; false => 0


let isLoggedIn =  "kiran";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)


// 1 => true
// 0 => false
// "" => false
// "kiran" => true



let num = 33

let stringNum = String(num);

console.log(typeof stringNum)
console.log(stringNum);


//  Operations


let val = 3
let negval = -val

console.log(negval)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2**3)
console.log(2%3)


let str1= "hello"
let str2 = " kiran"

let str3= str1 + str2
console.log(str3)


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let counter = 100;
counter++;
console.log(counter++);