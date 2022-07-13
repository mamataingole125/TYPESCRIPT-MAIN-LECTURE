//types
//Boolean
let x;
x = true;
x = false;
let isDone = false;
isDone = true;
//Number
let y;
y = 100;
let price = 10;
//Bigint
//only work for ES2020
let z;
// z=10n
//string
let firstname;
firstname = "masai";
firstname = `${y}`;
console.log(typeof firstname); //100 <== string
let first_name = "Masai";
let last_name = "School";
let full_name = `${first_name}_${last_name}`; //Inference  check from the values
//Arrays
let list = [1, 2, 6];
list.push(4);
let stringList;
let arrayOfStrings = ["Masai", "School"];
arrayOfStrings.push("Karnataka");
let boolList = [1, 2, 3];
//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance.
let tuple;
tuple = ["hello", 2];
tuple.push(5); //[ 'hello', 2, 5 ]
tuple.push("true"); //[ 'hello', 2, 5, 'true' ]
console.log(tuple);
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
//Null undefined
let u = undefined;
let n = null;
let a;
//function
//when we return something we use number, string ,etc
function sum(a, b) {
    return a + b;
}
//when you are not returning like if you are
// console logging then use void
function sum1(a, b) {
    console.log(a + b); //10
}
sum(5, 5);
sum1(3, 7);
//anonomous func syntax
let addfn = function (x, y) {
    return x + y;
};
//arrow func syntax
let addFn = (x, y) => {
    return x + y;
};
//Any
let value;
value = 5;
value = "string";
// ? meaning it is optional 
let obj;
obj = {
    label: "add",
    color: "red",
    size: 24
};
let arrOfPerson = [];
const masai = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true,
};
function printName({ firstname, lastname }) {
    return firstname + " " + lastname;
}
console.log(printName({ firstname: "masai", lastname: "school" })); //masai school
function printName1({ firstname, lastname }) {
    if (lastname)
        return firstname + " " + lastname;
    return firstname;
}
console.log(printName1({ firstname: "masai", lastname: "school" }));
//union type
let mix;
let userType;
let response = {
    status: true,
    cityName: {
        title: "Nanded"
    }
};
let coder = {
    first_name: "masai",
    last_name: "school",
    isWorking: true,
    skills: "coding",
};
//# sourceMappingURL=index.js.map