// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

const { CLIEngine } = require("eslint");


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num2String = (num) => {
    return num.toString();
}

const result = num2String(42)

console.log(result)



// Write a JavaScript program to convert a string to the number.

const string2Num = (str) => {
  return parseInt(str);
}

console.log('NEW', string2Num('42'))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String



  //write a function that takes a variable that is a datatype
  //return the type of that variable - using the 'typeof' operator
let oneNum = 10;
let twoNum = 5;
console.log(oneNum + twoNum)

const myBool = false;
const myNumber = 27;
const myString = 'string';


const isTypeOf = (data) => {
return console.log(typeof data);
}

isTypeOf(myBool);
isTypeOf(myNumber);
isTypeOf(myString);
isTypeOf(27);
isTypeOf(x);
isTypeOf(0);
isTypeOf(null);






  
  
// Write a JavaScript program that adds 2 numbers together.
const add = (num1, num2) => {
  return num1 + num2;
}
console.log(add(42, 2));



// Write a JavaScript program that runs only when 2 things are true.
const season = (x , y) => {
  if (x === y) {
    return "hello"
  }
  else{ return "bye"}
}

console.log(season(3, 3));

console.log(season(3, 4));



// Write a JavaScript program that runs when 1 of 2 things are true.
const hour = (x, y) => {

if (x === 18) {
  greeting = "Good day";
} else {greeting = "Good evening";}
}

console.log(hour(18, 2));



// Write a JavaScript program that runs when both things are not true.  
const time = (x, y) => {
  

if (x && y > 10) {
  return "Good morning";
} 

}

console.log(time(11, 20));


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
