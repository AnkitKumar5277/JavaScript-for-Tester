console.log("Hello wold");

var a = 10; // declaration
a = 11
var name = 'Anki Kumar'; 
var isStudent = true; // boolean 
var xObject = {}; // object
var xArray = []; // array
console.log(a, name, isStudent, xObject, xArray);

let y = 13;
y = 9; 
// y = 'Ankit'
const z = 10;
console.log(y, z);

xObject = {
    name: "ankit",
    age: 22
};
console.log(xObject.age, xObject.name);

xArray = ['xuv700', 'i10', 'Hector']; //indexing
console.log[xArray[1]];

// var a: boolean = 'Ankit'; // string is not assignable to number

let arrayOfObject = [
    { name: 'a', age:30},
    { name: 'b', age:22},
];
console.log(arrayOfObject[0].name, arrayOfObject[0].age);
console.log(arrayOfObject[1].name, arrayOfObject[1].age);

var a = 10;
var b = 5;
const sum = a + b;
const sub = a - b;
const mul = a * b;
const rem = a % b;
console.log(sum, sub, mul, rem);

// var vs let
// ObjectInArrays, ArraysInObject

// condition
var m = 10;
var n = 20;
if (m<n) {
    console.log('True');
} else if (m>n) {
    console.log('False');
} else if (m>=n) {
    console.log('One more condition');
}

var x = 100;
if (x % 4== 0) {
    console.log('Dvisible by 4');
} else {
    console.log('Not divisible by 4');
}

// switch
var day = 1;
switch(day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Satuday");
        break;
    default:
        console.log('Not invalid date');
}
       
// functions in js
function sumTwoNumbers(a, b) {  // parameters
    console.log('Doing something');
    return a + b;
}

// const sumOfOneTwo = sumTwoNumber(1, 2);

var str = 'ABCD';
var str2 = 'Hello, how are you?';
console.log(str.length, str2.length);

console.log(str2.indexOf('which')>=0);

var st = "Apple, Banana, Kiwi";
console.log(st.split(', '));
console.log(st.slice(0, 4));

// var response = '{
//     "name":"Ankit", 
//     "age":23,
//     "car":["tesla", "ferrai", "Bugati"]
// }';
// const parsedJson = JSON.parse(response);    
// console.log(response.name);
// console.log(JSON.stringify(parsedJson));

var myMarks = [34, 45, 54, 70];
const doubleMarks=[]
for (let index = 0; index < myMarks.length; index++) {
    if (myMarks[index] <= 50) {
        doubleMarks.push(myMarks[index] * 2);
    } else {
        doubleMarks.push(myMarks[index]);
    }
}
console.log(doubleMarks);

// array, map,
const doubleMarks2 = myMarks.map(function (mark) {
    return mark + '%';
});
console.log(doubleMark2);

// filter
const filterMarks = myMarks.filter(function (mark) {
    return mark >50;
});
console.log(filterMarks);
})
