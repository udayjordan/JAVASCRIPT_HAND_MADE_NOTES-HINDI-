/*Interview question on functions..*/
/*

function square(num){
    return num * num;
}
*/
/*
const square =function(num){
    return true;
}

first class func

function square(num){
    return num * num;
}

function displaySquare(fn){
    console.log("Square is"+fn(5));
}

displaySquare(square);

IIFE

(function square(num){
    return num * num;
})(5);

// let has a function scope but var doesnt
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

function call can be made any where it is not like variables 
so hoisting can be made anywhere


if a local scope is present inside a func. scope
than we will not consider the global scope

function multiply(num1,num2){
    console.log(num1,num2);
}
var arr=[5,6];
multiply(...arr);//spread operator

const fn(a,x,y,...numbers)=>{
                   ^---always to be used at last 
                    //rest operator
console.log(x,y,numbers);
}
fn(5,6,3,7,8,9);


call back func

function inside function
//default functions of it are 
document.addEventListener("click",function(){

})
similarly we have map ,set
etc

const fn=()=>{

}

this keyword
let user={
    username:"Roadside coder",
    rc1:()=>{
     this.username//refers to global obj
    },
    rc2(){
      //in case of normal function it refers to local obj
    },

};


const data ={
    name:"anil",
    age:29,
    skill:"JS"
}
const {age}=data;
console.log(age);
//how to get name property without. operator

function x(){
    var a=7;
    function y(){
        console.log(a);//this will log 7
    }y();
}x();

let data={name:"anil";age:29,skill:"JS"};<--
let info={name:"Noida";mail:"aniltest",skill:""react"};

//we will spread operator

data={...data,...info};// here skill pos but value: react hoga

promise

promise()
    |
    |
    |
resolve()  reject()
|            |
then()       catch()

let prom=new Promise(function(resolve,reject){
if(contd){
    resolve();
    else {
        reject();
    }
}
}

);

//we can also do this 
function prom(paramter1,parameter 2){
    return new Promise(function(resolve,reject){
if(contd){
    resolve();
    else {
        reject();
    }
}
}

);
}



let onfulfuilment=(result)=>{
    console.log(result);

}
let onRejection=(error)=>{
    console.log(error);
}

prom.then(onfuilfment);//prom() for func inside func
prom.catch(onRejection);
prom.then(onfuilfment).catch(onRejection);
console.log(prom);

// we can do this also
prom.then(
    (result)=>{
    console.log(result);

}
).catch(
    (error)=>{
    console.log(error);
}

)
async and await
//ES7
async function test(){
return "Hello";
}
let test=async ()=>"hello";
test().then((result)=>{
console.log(result);
});

//Await Method
async function test(){
    console.log("A");
    await console.log("B");//server sa data fetch karka lana ho
   //it will wait 
 const response=await fetch("json/st.json")
    console.log("A");


}
test();
console.log("D");
console.log("E");


*/

