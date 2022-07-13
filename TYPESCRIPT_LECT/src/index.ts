

//types

//Boolean
let x:boolean;
x=true;
x=false;

let isDone: boolean = false;
isDone = true;


//Number

let y:number;
y=100;

let price: number = 10;


//Bigint

//only work for ES2020
let z:bigint;
// z=10n

//string

let firstname:string;
firstname="masai"
firstname=`${y}`
console.log(typeof firstname) //100 <== string

let first_name: string = "Masai";
let last_name: string = "School";
let full_name = `${first_name}_${last_name}`; //Inference  check from the values


//Arrays

let list:number[]=[1,2,6]

list.push(4)

let stringList:string[];

let arrayOfStrings: string[] = ["Masai", "School"];
arrayOfStrings.push("Karnataka");

let boolList:Array<number>=[1,2,3]


//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance.

let tuple: [string,number];

tuple=["hello",2]

tuple.push(5);      //[ 'hello', 2, 5 ]
tuple.push("true")  //[ 'hello', 2, 5, 'true' ]
console.log(tuple);


//enums

 enum Color {
    Red, //0
    Green, //1
    Blue //2
}

const enum Color1 {
    Red=1,
    Green=3,
    Blue =5
}


const enum Color2 {
    Red="Red",
    Green="Green",
    Blue ="Blue"
}

//Null undefined

let u:undefined=undefined
let n:null=null
let a: any;



//function


//when we return something we use number, string ,etc
function sum(a:number ,b:number) :number{

    return a+b
}


//when you are not returning like if you are
// console logging then use void
function sum1(a:number ,b:number) :void{

    console.log(a+b)//10
}

sum(5,5)
sum1(3,7)

//anonomous func syntax
let addfn=function (x:number,y:number):number {

    return x+y
}

//arrow func syntax
let addFn=(x:number,y:number) : number=>{
    return x+y
}

//Any

let value:any

value=5;
value="string"


//object

//Primitive types in TypeScript -> number, string, boolean, null, undefined, symbol and big-int.
//to create the shape of an object

interface ButtonProps {
    label:string,
    color?:string,
    size?:number
}

// ? meaning it is optional 

let obj:ButtonProps;

obj={
    label:"add",
    color:"red",
    size:24
}



type softwareDeveloper = {
    skills: string;
  };
  
  type person1 = {
    first_name: string;
    last_name: string;
    age?: number;
    isWorking: boolean;
  }; // creating a blue-print for the object


  let arrOfPerson: person[] = [];


  const masai: person1 = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true,
  };



//objects function

interface person {
    firstname:string,
    lastname:string
}


function printName({firstname,lastname} : person):string{

    return firstname+" "+lastname
}

console.log(printName({firstname:"masai",lastname:"school"})) //masai school


function printName1({firstname,lastname} : person):string{

    if(lastname) return  firstname+" "+lastname
    
    return firstname
}

console.log(printName1({firstname:"masai",lastname:"school"}))


//union type

let mix : number | string | boolean | null

let userType:"super-admin" | "admin" | "user"


// Types
type RequestLoading={
    state :"Loading"
}

type RequestFailure={
    state :"failed",
    code:number
}


type RequestSuccess={
    state :"success",
    response:{
        title:string,
        status:boolean,
        id:string,
        count:number
    }
}

type NetworkState=RequestFailure | RequestLoading | RequestSuccess


//Intersection type

interface ErrorInterface {

    status:boolean,
    error?:{
        message:string
    }
}

interface CityData {
    cityName:{title :string}
}

interface CountryData {
    datails: {
        countOfCities :number,
        capital:string
    }
}

type CityResponce=ErrorInterface & CityData

type CountryResponse=ErrorInterface & CountryData


let response:CityResponce={
status:true,
cityName:{
    title:"Nanded"
}
}


let coder: person1 & softwareDeveloper = {
    first_name: "masai",
    last_name: "school",
    isWorking: true,
    skills: "coding",
  };
