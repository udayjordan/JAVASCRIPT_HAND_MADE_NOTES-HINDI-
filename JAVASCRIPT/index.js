// document.write("Hello World<br>");
//  // We can write html tags inside the "..." to 
// // perform html tags action
// document.write("<i>Hello World</i>");

//IT HELPS IN DYNAMICALLY MODIFIED OF JS

//types of variable in javascript
 /* 1. var
    2.Let 
    3.const
    */
//    var x="yahoo baba";//var=>variable it can be of any type
//                       //var=>strings,integer etc.
//    x=100.52;// it will overwrite the previous value with the
//                 // present one.
// document.write(x);
/* HOW TO WRITE VARIABLE NAME
WRITE WAY                wrong way
1.firstname             1.first name
2.first_name            2.99firstname
3.first-name
4.firstName(isko hum camel case bolta h)
5.firstname99

*/
// var first,second;(agar hum initialize kara bina print karna chahnga to undefined show hoga)
// document.write(first);
// output:->undefined

// Difference between let and var
/*correct:-            wrong:-
var x="yahoo";        let x="yahoo";
var x="baba";         let x="baba";dubara sa declare nhi kar sakta 
correct:-             correct:-
var x="yahoo";         let x="yahoo"; 
 x="baba";             x="baba";
 */

 /*in case of const agar apna ak bar value assign kar Di
 wo change nhi hoga

 WRONG:- or ERROR:-
 const second="Hello";
 second="world";
 */
/*...DATA TYPE>>*/
// var x="HELLO WORLD";     //->string
// var x=25; //->number
// var x=true;//->Boolean
// var x=["HTML","CSS","JS"];//->Array
// var x={first:"Jane",last:"Doe"};//->object
// var x=null;//->NULL
// var x;//->undefined

/*
 var c="YAHOO";
document.write(typeof c);// it tells the data type

var c= undefined;//undefined is a value
document.write(typeof c);//->undefined

type of ARRAY is a Object and object ka bhi object hi h
*/

// Different types of arithmetic operators
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

var a=20;
var b=100;
var c=a*b;
document.write(c);//2000
var c=a/b;//2;
similarly we can do other functions
a=2;
b=3;
var c=a ** b ;//2^3=8


for assignment operator follow this link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators
=
+=
-=
*=
/=
%=
**=
*/
// var a=10;
// var b=3;
// a+=b;
// console.log(a);
// document.write(a);

/*...CONSOLE.....*/
//console.log([1,2,3]);
/*...similarly .....*/

// console.warn("This is warning");
// console.error("there is error");

console.table([1,2,3]);

// to clear previous commands
console.clear();

// to find the time taken to run the following commands
// console.time("Test");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.timeEnd("Test");

/* we can use JS command on console for testing 
write the below command only in console |
                                        v
document.getElementById("main").innerText;

*/

/* COMPARISON OPERATOR */
/*
var x=15;
var y=25;

x>y -->return false;

so the value it can be either true or false

==   equal to 
===  equal value and equal type(strict equal)
!=   not equal
!== not equal value or not equal type
> greater than
< less than
>=  greater than equal
<=  less than equal

var a=10;
var b=10;

console.log(a==b);true
b='10';
console.log(a==b);true
console.log(a===b);false
console.log(null==undefined);true
console.log(null===undefined);false


*/

/* .....IF STATEMENT .....*/
/*
BASIC IDEA LIKE ANY OTHER PROGRAMMING LANGUAGE

syntax:-
var x=15;
//IT WILL PRINT
if(x>10){
    document.write("x is greater");
}
x=5;
//IT WILL NOT PRINT
if(x>10){
    document.write("x is greater");
}
*/

/*...LOGICAL OPERATOR...*/
/*
&&  logical AND
||  logical OR
!   logical NOT

like normal how we use in c++ or anyother programing language

var age=20;
if(age>=18 && age<=21){
    console.log("you are eligible");//print

}
age=22;
if(age>=18 || age<=21){
    console.log("you are eligible");//print
    
}
if(age>=18 && age<=21){
    console.log("you are eligible");//not print
    
}


*/
/* ....IF ELSE SATEMENT...*/
/*

SYNTAX:-
var  x=15;
if(x>30){
    console.log("x is greater");
}
else{
    console.log("x is smaller");

}

*/
/* 
var x="yahoo"
console.log(x+"baba");//concatenation in JS it 
                        prints yahoobaba

like if you want space in your text
dont use ""+x;
rather use this `${x}`;

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
FOLLOW THIS:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion


*/
/* IF ELSE IF STATEMENT */
/* LIKE C++ like if one statement is true 

than that's only get executed later one doesn't get checked even

so if you had to check multiple statement use multiple if like c++
or anyother programming language

if(contd.1){
    //statement 1
}
else if(contd.1){
    //statement 2
}
else if(contd.1){
    //statement 3
}
else{
    //stament 4
}

*/

/* ....CONDITIONAL(TERNARY) OPERATOR.....*/

/*
syntax:-
var x=15;
var z;
z="value is"+(x>10 ? "True" : "false");
console.log(z);
*/

/* SWITCH STATEMENT...*/

/*

switch(expression){
    case contd1:statement;
    break;
    case contd1:statement;
    break;
    case contd1:statement;
    break;

    default:satement;
}

var day=1;


switch(day){
    case 1:console.log("DAY MONDAY");
    break;
    case 2:console.log("DAY TUESDAY");
    break;
    case 3:console.log("DAY WEDDAY");
    break;
    case 4:console.log("DAY THRUSDAY");
    break;
    case 5:console.log("DAY FRIDAY");
    break;
    case 6:console.log("DAY SATDAY");
    break;

    default:console.log("DAY SUNDAY");
}

var age=15;

switch(true){
    case (a>=15 && a<=20):console.log("TEENAGE");
    break;
    
    default:console.log("NOT TEENAGE");
}
*/

/*....ALERT BOX....*/
/*

syntax:-
alert("HELLO EVERYBODY");

var a=10;
var b=20;
if(a>b){
alert("A is big");

}
else{
alert("B is BIG");

}

*/

/*....CONFIRM BOX...*/
/*

ya kuch yes or no puchanga apsa

var a=confirm("DO YOU LIKE OUR WEBSITE?");
alert(a);to "ok "pa click karna pa true pop up hoga
         else false pop up hoga

if(a)alert("thanks");
elsealert("sorry!");

*/
/*....PROMPT BOX...*/
/*
var a=prompt("What is your Name");
//ya hum sa value puchaga 
alert(a);

*/

/*....functions in JS...*/
/*
document.write("Wow you are");
document.write("<br>");
document.write("big");
...
...
...
document.write("Wow you are");
document.write("<br>");
document.write("big");
...
...
...
document.write("Wow you are");
document.write("<br>");
document.write("big");
...
...
...

There is a repetition in the  code
which we can replace using a function

in the following manner:-
ABC{
    document.write("Wow you are");
document.write("<br>");
document.write("big");
}
ABC();
...
...
...
ABC();
...
...
...
ABC();
...
...
...

syntax:-

function functionName(){<---- function definition

    //statement
}
functionName(); <--- calling a function

example:-
function hello(){
    document.write("Hello Everybody");

}

function yahoo(){
    document.write("Hello Yahoo Baba");
}
hello();
yahoo();
yahoo();
yahoo();
hello();

*/

/*.......Functions with Parameters....*/
/*
var a=10;
var b=20;
document.write(a+b);
...
...
...
var a=20;
var b=20;
document.write(a+b);
...
...
...
var a=30;
var b=20;
document.write(a+b);
...
...
...
instead we can replace the repititveness
pseudo:-
function sum(a,b){
    document.write(a+b);
}

sum(10,22);
sum(30,40);

syntax:-

function sum( a, b){
    document.write(a+b);
}

sum(10,20);<---(argument1,argument2);
sum(10,2);<---(argument1',argument2');
*/
/*
function sum(a="Yahoo",b="Baba"){
    document.write(`<h2>my name is ${a} ${b}</h2>`);

}
sum("uday"," das");
sum("salman"," khan");


*/

/*....GLOBAL AND LOCAL VARIABLE...*/

/*

jo value hum function ka bahar likhta h 
wo h global variable aur jo hum function.
ka andar likhta h wo h local variable.andar

var a=10;<---global variable

function functionName(){
    var b=25;<---Local variable
}


function hello(){
    var a="yahoo";
    console.log(a);
}
hello();<---console pa 'a' ka value log kar daga

console.log(a);<-----error for not defined

if a could be defined outside func. it would
print basic concepts like c++ or java ...


*/

/*......Events....*/

/*
1.click(onclick)
2.Double Click (ondblclick)
3.Right Click  (oncontextmenu)
4.Mouse Hover  (onmouseenter)
5.Mouse Out     (onmouseout)
6.Mouse Down     (onmousedown)
7.Mouse Up       (onmouseup)
8.Key Press      (onkeypress)//body tag and form tag
9.Key Up        (onkeyup)//body tag and form tag
10.Load         (onload)
11.Unload        (onunload)
12.Resize         (onresize)//body tag and form tag
13. Scroll        (onscroll)//body tag and form tag

see the html body

function hello(){
    var a="yahoo";
    document.write(a);
}



*/
/*....while loop...*/

/*
Loop is divided into three parts 
 1.Initialization
        |
        |
        |
        |
        v     false
 2.Condition--------->Out of Loop
^       |
|       |
|       | true
|       |
|       |
|      v
 3. Increment/Decrement 

 while loop
 do/while loop
 for loop
 for/in loop(Objects)
 forEach(Array)


 while loop syntax:-
 
 var a=1;
 while(a<=10){
    document.write("<br>Yahoo baba");//Prints 10 times
    a++;
 }


*/
/*...Do While Loop..*/
/*
syntax:-
var a=1;

do{
console.log("yahoo");
a++;
}while(a<=10)


*/
/*...FOR LOOP.....*/
/*

syntax:-

for(var a=1;a<=10;a++){
    console.log("yahoo");
}

*/

/*...BREAK AND CONTINUE STATEMENT....*/
/*
like normal break and continue in c++
for(var a=1;a<=4;a++){
    if(a==3){

        continue;
    }
    document.write(a);
}
output:-
1
2
4

...BREAK...
for(var a=1;a<=4;a++){
    if(a==3){

        break;
    }
    document.write(a);
}
output:-
1
2

*/
/*....Nested Loop...*/
/*
syntax:-
for(var a=1;a<=10;a++){
    for(var b=1;b<=10;b++){
      //statement  
    }
}

//TO SHOW DATA IN MATRIX OR TABULAR FORM

for(var a=1;a<=100;a+=10){
    for(var b=a;b<a+10;b++){
          document.write(b+" ");
      }
      document.write("<br>");
  }

  EXAMPLES OF NESTED LOOPS


  1
  12
  123
  1234
  12345

for(var a=1;a<=5;a++){
    for(var b=1;b<=a;b++){
          document.write(b+" ");
      }
      document.write("<br>");
  }
  

  1
  22
  333
  4444
  55555

  
  for(var a=1;a<=5;a++){
    for(var b=a;b>=1;b--){
          document.write(a+" ");
      }
      document.write("<br>");
  }

  55555
  4444
  333
  22
  1

  
  for(var a=5;a>=1;a--){
    for(var b=a;b>=1;b--){
          document.write(a+" ");
      }
      document.write("<br>");
  }

  */

  /*...ARRAY TUTTORIAL ...*/
  /*

         0  1  2  3  4<-----index
  var a=[10,20,30,40,50];
  document.write(a[4]);//50<--o/p
  document.write(a[5]);//undefined<--o/p
  
  document.write("<ul>");
  for(var i=0;i<=4;i++){

    document.write("<li>"+a[i]+"</li>");
  }
  document.write("</ul>");


  var a=[10,20,30,40,50];

  document.write("<ul>");
  for(var i=0;i<=4;i++){

    document.write("<li>"+a[i]+"</li>");
  }
  document.write("</ul>");


  */
 /*...ARRAY-II....*/

 /*

 var a=[10,20,30];
 var a=new Array(10,20,30);<---constructor method

 var a=new Array();
 a[0]=10;
 a[1]="Harry";
a[3]=true;

for(var i=0;i<3;i++){
    a[i]=prompt("Enter the value :");

}

*/
/*.....MULTIDIMENSIONAL ARRAY.....*/
/*
NAME | AGE  |GENDER| CLASS
--------------------------
HARRy| 18   | male | B.com
--------------------------
Sunny|  19  | male | BCA
--------------------------
Sarah|  18  |female| B.com



var a=[
//0       1    2      3
["HARRy", 18,"male","B.com"], //<----0
["Sunny" , 19 , " male","BCA"],//<------1
["Sarah" , 18 , "female","B.com"]//<----2

];
document.write(a.length);<-----tells the length of array
document.write("<table border='1px' cellspacing='0' >");
//a[row no.][col.no.]
for(var i=0;i<=2;i++){
document.write("<tr>");
    
    for(var j=0;j<=3;j++){
document.write("<td>"+a[i][j]+"</td>");
}
document.write("<br>");

document.write("</tr>");

}
document.write("</table>");


*/
/*.....MODIFY AND REMOVE ARRAY ELEMENT....*/
/*

var a=["HARRy", 18,"B.com"];
a[0]="sunny";// to modify
document.write(a+" "+"<br>");

delete a[1];// to delete a element
document.write(a+" ");

*/
/*.....ARRAY METHODS....*/
/*
sort()
reverse()
pop()
push()
shift()
....etc

var a=["sanjay","arman","ram"];
a.sort();

a.reverse();

*/
/*.......POP() and PUSH().....*/
/*
var a=["sanjay","arman","ram"];
a.pop();<----last sa remove karaga
a.push("karan");<---last sa add karaga

*/
/*.....shift()and unshift() methods.....*/
/*
var a=["sanjay","arman","ram"];
 
shift-->opposite of pop shift deletes from first
a.shift();
unshift-->opposite of push unshift adds value from first

a.unshift("Ramaham");

*/
/*...CONCAT AND JOIN.......*/

/*
.......CONCAT.......

var a=["sanjay","arman","ram"];
var b=["uday","lala"];
//concat()---->matlab hota h do array ko jorna
var c=a.concat(b);
//op-->>"Rahul","rehaman","uday","lala"

var d=a.concat("Rahul","rehaman");
//o/p-->"sanjay","arman","ram","Rahul","rehaman"
 
var e=a.concat(b,d);


.............JOIN.......
var a=["sanjay","arman","ram"];
var b=["uday","lala"];
var c=a.concat(b);
var d=c.join(" / ")
document.write(d);

*/
/*....SLICE...SPLICE...*/
/*        
var a=["sanjay","arman","ram"];

slice(start,end);//talking of index
so suppose I want sanjay and arman but 
end matlab 2 tak 2nahi print karana h

var a=["sanjay","arman","ram"];
var b=a.slice(0,2);
document.write(b);
// if we dont give end index it will print all from the 
//given starting index
we can use -ve indexing like -1,-2,-3it will start
from end the last index is considered to be -1

SPLICE FUNCTION

let say we want to add a name to array
after arman and before ram

How to do it
splice(index,howmany value we want to delete ,"new value")


var a=["sanjay","arman","ram"];
a.splice(2,0,"Neha","karan");//<---exisiting array ma change kar data
document.write(a);
a.splice(2,2);//<---It can also work to delete like slice function
*/

/*.....IS ARRAY....*/
/*
var a=["sanjay","arman","ram"];
var b=Array.isArray(a);
document.write(b);//<---true
a="sanjay";
var b=Array.isArray(a);
document.write(b);//<---false

*/


/*...indexOf() & lastIndexOf()......*/
/*

var a=["sanjay","arman","ram","arman"];
         0         1     2      3

arman--->1
indexOf("search item",start)
                        ^
                        |-------to see where you want to start
                                 searching
var a=["sanjay","arman","ram","arman"];
var b=a.indexOf("arman");
console.log(b);
var b=a.indexOf("arman",2);
console.log(b);

lastIndexOf("search item",start)

does the same but from last 

*/

/*.....includes()....*/

/*
var a=["sanjay","arman","ram","arman"];
//includes("search items") returns true or false
var b=a.includes("ram");
console.log(b);//<--return true
*/
/*...some()...every()...*/
/*
var ages=[10,13,18,20];
var adultAge=18;

ages>=adultAge
some()
checks if any of the elements in an array pass a test
//EXAMPLE:-

var ages=[10,13,15,16,18,20];
document.write(ages+"<br><br>");
var b=ages.some(checkAdult);// ya ak call ki tarah kam karta h
document.write(b+"<br><br>");//TRUE


function checkAdult(age){
return age>=18;//returns a boolean
}

every()
//same as some only it checks every value present in the array
 if one contd. doesnt match it returns false

 var ages=[10,13,15,16,18,20];
 document.write(ages+"<br><br>");
 var b=ages.every(checkAdult);// ya ak call ki tarah kam karta h
 document.write(b+"<br><br>");//FALSE
 
 
 function checkAdult(age){
 return age>=18;//returns a boolean
 }


 */

 /*...find and findIndex...*/
 /*
 var ages=[10,13,15,16,18,20];
 
var adultAge=18

NOw I want to find wether there is any value
in my array which is greater than the adult age
ages>=adultAge

find(function Name)--->returns 18

findIndex(function Name)--->same as above jus returns the index

//TRY THE ABOVE EXAMPLE....
*/
/*...filter...*/
/*
ya function naya array banaka daga depending on the contd.
var ages=[10,13,15,16,18,20];
document.write(ages+"<br><br>");
 var b=ages.filter(checkAdult);
 document.write(b+"<br><br>");
 
 
 function checkAdult(age){
 return age>=18;
 }
*/
/*....toString(),valueOf(),fill()....*/
/*

var a=["sanjay","arman","ram","arman"];
 
a.toString();//IT CONVERTS THE ARRAY INTO STRING
document.write(a);

var a=["sanjay","arman","ram","arman"];

//suppose I want to fill every field with ram ram ram ram with a single value
a.fill("Ram");
console.log(a);



*/

/*..forEach()..*/

/*

var a=["sanjay","arman","ram","arman"];

a.forEach(function(){
    //statement        <---IT is used to print the value of
                           each index or even the index no.

});


var a=["sanjay","arman","ram","arman"];

a.forEach(function(value,index){
    document.write(index+":"+value+"<br>");

});

//or
var a=["sanjay","arman","ram","arman"];

a.forEach(loop);

function loop(value,index){
    document.write(index+":"+value+"<br>");

}


*/



/*....Objects....*/
/*

var a=["Ram","kumar",18,"India"];
ya array jaisa hi kam karta h
balki arrays ka bahut hi advance version h

1.har object ma index name use hota h
2.Object ka andar ap array bhi use karta sakta h
3.ap functions bhi use kar sakta h

var a={
firstName:"Ram",
lastName:"Kumar",
age:18,
country:"India"
};

var a={
    firstName:"Ram",
    lastName:"Kumar",
    age:18,
    country:"India",
    favMovies:["DHOOM","SHOLAY"],
    salary:function(){
        return 25000;
    },
    fullname:function(){
        return this.firstName+" "+this.lastName;
    }
    };
    //document.write(a);//<--it will show Object Object
console.log(a);
// document.write(a.firstName);
document.write(a.favMovies);
document.write(a.favMovies[0]);//<---"DHOOM"
document.write(a.salary()+"<br>");
document.write(a.fullname());
// we can also use object inside a object


*/
/*....OBJECT PART-II....*/
/*
CREATING A OBJECT METHOD -II

var a=new Object();

//like c++ oops but little different

a.firstName="Ram";
a.lastName="Kumar";
 document.write(a.firstName);
 //other way to write a.firstName
document.write(a["firstName"]);


*/
/*.....ARRAY OF OBJECTS...*/
/*

syntax:-


var student=[
    {Name:"Ram",
     Age:15
    },
    {Name:"Karam",
     Age:16
    },
    {Name:"Rahul",
     Age:14
    }
];

console.log(student);
for(var i=0;i<student.length;i++){
   document.write(student[i].Name+" ");
   document.write(student[i].Age);
   document.write("<br>");

}
*/
/*...CONST VARIABLE WITH ARRAY AND OBJECTS....*/
/*

//we can change value in constant variable
const a=[10,20,30];
// IN THIS MANNER WE CAN CHANGE THE VALUE 

a[1]=25;
a[2]=35;
console.log(a);//IT WILL BE UPDATED 
but you can't change in this manner

a=[40,50,60];
//FOR OBJECTS

const student=
    {Name:"Ram",
     Age:15
    };
    

 student.Name="Yahoo Baba";
 console.log(student.Name);//IT WILL CHANGE
 //BUT YOU CAN'T CHANGE IN THIS MANNER SHOWN BELOW
const student=
{Name:"Sita",
Age:15

};

*/
/*...FOR/IN lOOP...*/

/*
IT IS USED IN OBJECTS TO REMOVE MULTIPLE LINE OF DECLARATION STATEMENT





    SYNTAX:-
    for(var i in a){
        //statement
    }

var obj={
    firstName:"Ram",
    lastName:"Kumar",
    age:18,
    country:"India",
    };

for(var key in obj){
    document.write(key+":"+obj[key]+"<br>");
}
*/
/*....Array METHODS Map()....*/
/*
var a=[1,3,5,8,10];

syntax:-
a.map(function(){
    //statement
});

var a=[1,3,5,8,10];

var b=a.map(test);

document.write(b);

function test(x){
return x*10;
}
var ary=[
    {fName:"yahoo",lName:"BABA"},
    {fName:"rahul",lName:"BABA"},
    {fName:"Ram",lName:"rahim"}

];

var b=ary.map(test);
document.write(b);

function test(x){
    return x.fName+" "+x.lName+"<br>";
    }

*/
/*....String Methods...*/
/*
var str="Javascript is a great language";
var a =str.length;//count space too
a=str.toUpperCase();
a=str.toLowerCase();//converts the str to resp. case

a=str.include("great");//true;it returns either true or false and is case sensitive
a=str.startsWith("Java");//true ;ya start sa agar diya hua value mil jai wo true retuen karaga
a=str.startsWith("Javascript");//true
//similarly there is endsWith
a=str.endsWith("language");//true
a=str.endsWith("age");//true

var a=str.search("is");//11; it returns the position of the string if it found else return -1

//match v/s search
 search kya karaga wo ak bar dhundaga uska
  position aur return karadaga 

match kya karaga wo repeatedly dhundaga uss string ya word ko 
aur ak array banadaga uss word ka

var str="Javascript is a great is language";

var a=str.search(/is/g );
document.write(a);//o/p:-is,is 

a=str.indexOf("is")//11
a=str.lastIndexOf("is");//22

a=str.replace("javascript","PHP");
a=str.replace(/javascript/g,"PHP");
                    ^         ^------value to be replaced with
                    |-----value to be replaced

   var str="  JAVASCRIPT   "  ;
var a=str.trim();//removes spaces
alert(a);

var str="Javascript is a great is language";
var a=str.charAt(0)//returns J it gives the character of the asked pos

var a=str.charCodeAt(1);//It returns ASCII code
 for example at pos 1 we have a what is the ascii code 
 for a is 97 .so o/p is 97.

var b=String.fromCharCode(65);//o/p:- A ;it returns the ASCII code for the value asked

//concat()used to add multiple strings 
//split()
var str="Javascript is a great is language";

var a=str.split(" ");//it asks to split the string from where like in this case jaha bhi space dikha waha sa split kado
than it returns an array
o/p:-
Javascript,is,a,great,is,language

//repeat()
It basically asks that how many times you want to repeat the above string
var a=str.repeat(2);
o/p:-
Javascript is a great is languageJavascript is a great is language

a=str.slice(3,10);//initial to last pos jitna bhi characters h wo print kardaga
//substr and substring same as slice
a=str.substr(3,5);//same as c++
               ^----tells the no. of characters in string you want to show

var str=50;
var a=str.toString();//converts to string

document.write(a);
*/

/*...Number Methods...*/
/*
var a="99";

var num=Number(a);//IT converts to number in string it returns NaN
num=parseInt(a);//starting ma value hona chahiya 
for
a="10.07";
a="99 88 100";
o/p:-
10
99
num=parseFloat(a);
for
a="10.07";
a="99 88 100";

o/p:-
10.07
99

//isFinite()....and....isInteger()
num=Number.isFinite(a);//ya finite value h to true return karaga

for:-
a=100      o/p:- true
a=Infinity  o/p:-false
a="heloo"  o/p:-false

num=Number.isInteger(a);
for:-
a=100.3     o/p:- false
a=100  o/p:-true
a="heloo"  o/p:-false

//toFixed() and toPrecision
var a=25.5679
var num=a.toFixed(3);//round off kardaga 25.57

num=a.toPrecision(3)//roundoff decimal ka bad wala karaga 25.568


document.write(num);

*/
/*....Math Method....*/
/*
mainly used in animation , video game dev // check my repo
and also used in other stuff like complee accounting

var a=Math.ceil(5.2);

ya ak upper value daga huma aur ya tabhi kam karaga jab
humlog k pass ak decimal no. ho 
otherwise ya kam nhi karaga 
 o/p:- 6

var a=Math.floor(5.2);

ya ceil ka opposite ha jo bhi ya downward value data h 
o/p:- 5

var a=Math.round(5.2);

if the value after decimal is less than 5 than it act as floor
else it act as ceil and vice versa

o/p:- 5
eg:-Math.round(5.6);//6<--o/p


var a=Math.trunc(5.2);
 
ya sirf dot k value return kardaga
o/p:- 5

var a=Math.max(5,6,10);//10
var a=Math.min(5,6,10);//5

var a=Math.sqrt(4);//2<---square root of 4
var a=Math.cbrt(9);//3<----cube root of 9

var a=Math.pow(2,3);//4^3<---8

var a=Math.random();//By default ya huma 0 aur 1 ka beech ma no. daga
var a=Math.floor(Math.random()*10)+1;//ya huma 1 to 10 daga random no.


var a=Math.abs(-5.25);//returns absolute value 5.25
var a=Math.abs(null);//returns 0

var a=Math.PI;//returns a constant value of PI 3.14159...

*/
/*...Date method...*/

/*
For creating date method first we need to create a date object

var now=new Date();

document.write(now);//gives the present date but ya system sa utha ta h naki server sa

document.write(now.toDateString());//ya sirf date print karka daga naki GMT wagara
// gives the respective info.
document.write(now.getDate());
document.write(now.getFullYear());
document.write(now.getMonth());
document.write(now.getDay());//monday to 1 print karaga simuntaneously

var now=new Date("January 5 2010");//returns 2 yani tuesday 

//Ya current pa time dikhayaga present time 
document.write(now.getHours());
document.write(now.getMinutes());
document.write(now.getSeconds());
document.write(now.getMilliseconds());
//we can use setHours ,setMinutes,setSeconds for future dates
 */
/*...DOM...*/
/*
DOM TARGETING METHODS
How to Target DOM Object

ya to hum uska 1.id sa target kar sakta h
syntax:-
document.getElementById(id);

ya to hum uska  2.Class Name sa target kar sakta h

syntax:-document.getElementsByClassName(class);
aur 3.Tag Name
syntax:-document.getElementsByTagName(Tag name)

//Refer the DOM PICTURE FOLDER 

var element;

element=document;
// Ya pura document ko target karaga aur pura ka pura html 
utha ka da daga

console.log(element);//o/p:-#document

element=document.all;
// ya pura ka pura tag ak array format pa daga
aur koi bhi tag target karna k liya 

element=document.all[6];//index no. of the tag 

element=document.head;// ya head tag return karaga 
element=document.title;// ya title tag return karaga
element=document.body;// ya body tag return karaga

element=document.links;// ya anchors tag ko array k
form ma return karaga
element=document.links[2];

element=document.images;// ya image tag target karna k liya 

//same can be used to target forms
element=document.URL;//return URL
element=document.domain;//returns the domain name
element=document.baseURI;//return URL

element=document.getElementById("header");

element=document.getElementsByClassName("list");
if there are multiple class with same name
use this:-
element=document.getElementsByClassName("list")[1];

//same for tag name



*/
/*...DOM GET & SET METHODS...*/
/*
get with DOM

DOM Get Methods:-
innerText
innerHTML
getAttribute
getAttributeNode
attributes


element=document.getElementById("header").innerText;
//so in above case let say we have a class name content
which has a lot of content now if we console log this it will
show all the values it will show text without html

console.log(element);

element=document.getElementById("header").innerHTML;

//it act same as previous but it will show all the html tag 
present inside it

//getAttribute method


element=document.getElementById("header").getAttribute("style");
iska kya kam h header ma jo bhi id h jaisa id ,style kuch bhi
wo mujha uska content return karka daga
<div style="border:1px,color:blue">
o/p:-border:1px,color:blue
element=document.getElementById("header").getAttributeNode("style");
here
o/p:-style="border:1px,color:blue"

element=document.getElementById("header").attributes;
// ya sara attributes ko obj k form ma return kardaga
so agar mujha kisi bhi attribute ka value access karna h

let say it has 4 attributes length

element=document.getElementById("header").attributes[2].value;

....................................................

DOM SET METHODS

innerText
innerHTML
setAttribute
attributes
removeAttribute


document.getElementById("header").innerText="wow";
//it will add text to the site but html tags wont
work <h1>wow</h1>... this wont work it works for
innerHTML

document.getElementById("header").innerHTML="<h1>wow</h1>";

...here the tags works fine

//so setAttribute does what it changes the value of the particular
attribute 

document.getElementById("header").setAttribute("class","xyz");
document.getElementById("header").getAttribute("class");

// so in any attribute if we want to change its value we can
//
we can do the same thing using attributes

document.getElementById("header").attributes[1].value="xyz";

// let say in the above example in the index 1  we have the class attribute whose value we want to change 


document.getElementById("header").removeAttribute("class");
//it will remove the value of the class


*/
/*...DOM querySelector() and querySelectorAll()..*/
/*

document.querySelector("#header").innerHTML="<h1>wow</h1>"
querySelector v/s getElementByClassName
queryselector sirf pahla value of attribute return karaga 
agar same namka aur bhi hoga to wo return nhi karaga 
where as in case of class name it actually returns all
the value of attribute 
for targeting all the attributes with same name

document.querySelectorAll("#header")[1].innerHTML;

if we want o target h1 of header
document.querySelectorAll("#header h1");
*/
/*.....DOM CSS STYLING METHOD...*/
/*
style
className
classList

// How to get a value using style and change the css 
styling using style

//to get the css of the attribute
element=document.querySelector("#header").style.color;
console.log(element);
//it will get the color of the header attribute 

//to set the css to a particular attribute
document.querySelector("#header").style.backgroundColor="tan";

//similarly if we want to insert a class name 

document.querySelector("#header").className="xyz";

element=document.querySelector("#header").className;

//
document.querySelector("#header").classList="abc xyz";

element=document.querySelector("#header").classList;

console.log(element);// it will give us the result in the form
of array 

// if we want to add another class to given class
document.querySelector("#header").classList.add("xyz","efg");

// to remove 
document.querySelector("#header").classList.remove("xyz");

/*....addEventListener....*/
/*
document.getElementById(id).onClick=functionName;

document.getElementById("header").onClick=abc;


function abc(){
    document.getElementById("#header").style.background="green";

}



document.getElementById("header").addEventListener("click",functionName);
document.getElementById("header").addEventListener("click",function(){

    statement

});

document.getElementById("header").addEventListener("click",function(){

    
document.getElementById("header").style.color="blue";
// we can replace document.getElementById("header") by this

//this.style.color="blue";// for same event calling

});

suppose there are two div one outer and one inner
matlab ak div andar ak aur div

document.getElementById("#inner").addEventListener("click",function(){

    alert("Inner Div");

},false);
    |----------onCapture

document.getElementById("#outer").addEventListener("click",function(){

    alert("outer Div");

},false);


if you want to remove any event

document.getElementById("header").addEventListener("mouseleave",abc);

document.getElementById("header").addEventListener("click",function(){
document.getElementById("header").removeEventListener("mouseleave",abc);

});
function abc(){
    document.getElementById("header").style.background="blue";

}



*/
/* ......class list methods....*/
/*




document.getElementById("header").addEventListener("mouseleave",abc);

function abc(){
    //document.getElementById("header").classList.add("xyz","efg");
    //document.getElementById("header").classList.toggle("xyz");
    //document.getElementById("header").classList.item[0];//0 index pa jo class h wo show karta h

    //document.getElementById("header").classList.contains("xyz");// give true or false if it is present or not



ya add or remove dono ka kam karta h
    //document.getElementById("header").classList.remove("abc");

var a=document.getElementById("header").classList.length;
ya mujha apna class ka length get karka data h 
console.log(a);
}

*/
/*.....DOM traversal Methods.....*/
/*
refer 2.png

var a=document.getElementById("inner").parentElement;
console.log(a);

document.getElementById("inner").parentElement.style.background="blue";

parentNode and ParentElement similar ha 
like if there is not parent of the targeted class 
then ParentElement return NULL but parentNode returns something

document.getElementById("inner").parentElement;//NULL
document.getElementById("inner").parentNode;//returns something


......children and childNode......

var a=document.getElementById("inner").children;
console.log(a);
// agar manla ak particular children ko target karna chahta hu
var a=document.getElementById("inner").children[1];
// to target particular children
console.log(a);

//children and childNode ma bass yahi difference h ki 

var a=document.getElementById("inner").childNode;
//it will not only show the class but all the text comments tags etc below it
console.log(a);

document.getElementById("inner").firstElementChild.innerHTML;

//isko target karka hum kam kar sakta h


document.getElementById("inner").firstChild;
document.getElementById("inner").lasstElementChild;
document.getElementById("inner").lastChild;



 //Form Events
 we will be creating a form using a form tag
 label i will take the id 
 <label for=" ">Name</label> <input type="text" id="fname" onfocus="focusFunction(this)" onblur="blurFunction(this)" oninput="inputFunction(this) onchange="changeFunction(this) onselect="selectFunction(this)">
<form action=" " onsubmit="submitFunction()">
 <div id="test" style="border 1px solid red" onivalid="alert('please fill the first name')" required></div>
 function focusFunction(element){
 element.style.backgroundcolour="lime";


 }

 function blurFunction(element){
    element.style.background =" ";
 }

 function inputFunction(element)
 {
    var x=element.value;
    document.getElementById("test").innerHTML=x;

 }
 function changeFunction(element)
 {
    var x=element.value;
    document.getElementById("test").innerHTML=x;

 }

 // difference between onchange and oninput is that it gets 
 triggered only when we out focus



 function selectFunction(element)
 {
  console.log("you selected a text");

 }

  function submitFunction(){
    var x=document.getElementById("fname").value;
    alert("you submitted this form" + x);
  }

  // oninvalid


*/

/*...JAVASCRIPT ANIMATION..*/
/*

setInterval(functionName,millisecond)

clearInterval()---> to stop the animation

<style>
#test{
    width:150px;
    height:150px;
    background:red;
}

</style>

<div id="test"></div>

var a=0;
var b=setInterval(Anim,1000);

function Anim(){
a+=10;

if(a==200){
clearInterval(b);
}
else{
var target=document.getElementById("test");
target.style.marginLeft=a+"px";

}
//so it basically means after a interval of 1000 millisecond
your function is going to be called

*/
/*...javascript ONE TIME ANIMATION....*/
/*

setTimeout(functionName,millisecond)

it means the function will execute after that millisecond
it will execute once
clearTimeout

<style>
#test{
    width:150px;
    height:150px;
    background:red;
}

</style>

<div id="test"></div>

var b=setTimeout(Anim,3000);

function Anim (){
    var target=document.getElementById("test");
target.style.width="500px";
console.log("Hello");
}

function stopAnimation()
{
    clearTimeout(b);
}

*/
/*....Window Height and Width Methods....*/
/*

innerHeight
innerWidth
outerHeight
outerWidth

<body onresize="resizeFunc()">

</body>

function resizeFunc(){
    console.clear();
var iHeight=window.innerHeight;

console.log(iHeight);

var oHeight=window.outerHeight;
console.log(oHeight);



}

same for outer and inner width
*/
/*.....window open() & close()...*/
/*

window.open(URL,name,spec)

in the name area 

_blank// for new tab
_parent// to replace existing tab
_self
_top

<button onclick="openWindow()">open window</button>
<button onclick="closeWindow()">open window</button>

var myWindow;
function openWindow(){
   myWindow= window.open("http://www.google.com","_parent","width=500px,height=200pxleft=100px,top=100px");

}

function closeWindow(){
     myWindow= window.close();
}

/*....moveBy() and moveTo()...*/
/*
<button onclick="openWindow()">open window</button>
<button onclick="moveWindow()">move window</button>

<button onclick="closeWindow()">open window</button>

var myWindow;
function openWindow(){
   myWindow= window.open("http://www.google.com","_parent","width=500px,height=200pxleft=100px,top=100px");

}

function moveWindow(){
    // it will work only on your window site local hosted 
    myWindow.moveTo(100,100);
}
function closeWindow(){
     myWindow= window.close();
}
*/
/*
Location Object Properties

hash
host
hostname
href
origin
pathname
port
protocol
search


console.log(location);
console.log(location.host);
console.log(location.href);
console.log(location.hostname);
console.log(location.port);//return portno.

console.log(location.hash);

URL ma hash k bad koi bhi value ay hogi wo return kardagi


console.log(location.search);
?iska bad URL ma jo likha hota h used mainly in PHP

to get
location.href="http://www.yahoobaba.net";

assign()
reload()
replace()


location.reload();//to refresh page

location.assign("https://www.google.com");

location.replace("https://www.google.com");
it clears previous history means we canot go back

History Object Properties

.length

console.log(history);
console.log(history.length);

.back()
.forward()
.go()

<button onclick="backFunction()">Back</button>

function backFunction(){
    history.back();
}
//similarly forward works

function goFunction(){
    history.go(2);//move forward two pages
     history.go(-1);//move backward
}

*/




