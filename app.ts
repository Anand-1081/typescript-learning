//  tcs --init  - to make tsconfig file

// tsc --watch  - code  likhte raho compile hota jayega 

// primitive and reference 

// primitive - number , string , boolean
// [] {} () - uses reference if it is any where

//tuples   
let arr: [number,string] = [12,"anand"]

//enumerations (enum)
enum UserRoles{
    admin = "admin",
    guest ="guest",

}

UserRoles.admin

// Any -- jiska type define nahi kiya h 
let a  // not like this let a =10   do not assign any value first
a=10
a = "hi"
 a.toUpperCase()

// unknown
let b:unknown
// in unknown we have to check the type of variable then we can work on it 
if (typeof b === "string")
    a.toUpperCase()

//void  
function abcd():void{   // when a function do not return any thing we use void
 console.log()
}

function abc():boolean{   
 return true
}

//null
let c:null

//undefined
let d:undefined

// never
// function ab(): //never
// {
//     while(true){}
// }

// ab()
// console.log("hi") // this line will never run because the function call never come 


// type inference when we dont tell the ts it identify it own
let w = 12
let v= "hi"

// type anotations
// let s : number 
// function abcd (a:number , b:string):void{}
let s : number|boolean|string
s =12
s = true
s = "hi"

// Interface
interface user{
    name: string,
    email:string,
    age?: number
}

function getdataOfUser(obj:user){
    obj.email
}


// extending interface
interface user{
    name: string,
    email:string,
    age?: number
}

interface admin extends user{
    admin:boolean
}

function x(obj:admin){
  obj.admin
}


// two interface merges into one 
interface abcd{
    name:string
}

interface abcd{
    email:string
}

function y(obj:abcd){
  obj.name
}

//type aliases

type sankhaya = number |boolean  // union |

let o:sankhaya


// intersection
type users ={
    name: string,
    email:string,
    age?: number // optional property
}

type admi = users & {
    admin:boolean
}

// class and object 
class bottle {
    radius = 120
    price = 100
    color = "white"
}

let b1 = new bottle()

// access modifyer  (public , private , protected)
class bottlemaker{
    // if we dont use public in constructor then
    // public = name
    //  constructor( name:string, price:number){
    //this.name }
    constructor(public name:string,public price:number){} // parameter properties

    // in private ts show error but it compile it and show us the result
    // in private we can access it only in its class
    
}

new bottlemaker("hi",900)

// inheritence by extends

//protected  - if the constuctor is protected then we can only  access it in extends class

// after public(access modifiyer ) ke baad readonly lagane par hum bus pad sakte h


// get and set
class User {
    constructor(public _name:string,public age:number){}
    get Name(){
        return this._name
    }

    set Name(value:string){
        this._name = value
    }

}

let u1 = new User("hi" , 76)

// static  member dont include in instance of the class
class shery{
    static version = 1.0
}


// generics 
//generic function

function logger<T>(a:T){

}

logger<String>("hey")
logger<Number>(78)

// generic interface
interface ha<T>{
    name: string
    age :  number
    key : T
}

function p(obj:ha<string>){}

p({name:"fo",age:25 , key:"hjbjh"})

// generic function
class bottlemamker<T>{
    constructor(public key:T){
    }

}

let y1 = new bottlemamker<string>("hey")


//modules
import{onlinepayment} from "./app1"

// in export default we dont use {}

onlinepayment()


//type gaurds  -> type narrowing
// typeof  insaenceof 