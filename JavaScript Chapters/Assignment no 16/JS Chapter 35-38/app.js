
            // CHAPTER  NO 35-38
            // CHAPTER  NO 35-38
            // CHAPTER  NO 35-38

// question no 1

// function date(){
//     var currentDate = new Date()
//     console.log(currentDate)
// }
// date()

// question no 2

// function name(firstName , LastNAme){
//     var fName = prompt("Enter First Name")
//     var LName = prompt("Enter Last Name")
//     var fullName = fName +" "+ LName
//     alert("Hello"+" "+fullName)
// }
// name()

// question no 3

// function num(num1 , num2){
//      a = +prompt("Enter num1")
//      b = +prompt("Enter num2")
//      return a+b
// }
// console.log(num())

// questio no 4

// function calc(num1,num2,opt){
//     num1 = +prompt("Enter Num1")
//     num2 = +prompt("Enter Num2")
//     opt = prompt("Enter opt +,-,*,/")

//     if(opt==="+"){
//         return num1+num2
//     }
//     else if(opt==="-"){
//         return num1-num2
//     }
//     else if(opt==="*"){
//         return num1*num2
//     }
//     else if(opt==="/"){
//         return num1/num2
//     }else{
//         return "operator not found"
//     }
// }

// alert(calc())


// question no 5

// function arg(){
//     num = +prompt("Enter something")
//     return num*num
// }
// alert(arg())

//             OR
// function arg(num){
//    return num*num
// }
//  alert(arg(4))

// question no 6

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
    // else if (num == 0) 
    //     return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   console.log(factorialize(5))

//              OR

// function factorial(n){
// var h = 1
// for(var i = 1; i <= n; i++){
//      h = h*i
// }
// return h
// }
// alert(factorial(5))

//                OR

// question no 7

// function num(start,end){
//     var start = +prompt("Enter First Number")
//     var end = +prompt("Enter last Number")
//     for(var i=start;i<=end;i++){
//         console.log(i)
//     }
// }
// num()

// question no 8

// function hyp(base,perp){
//     var base = +prompt("Enter Base")
//     var perp = +prompt("Enter Perpendicular")
//     return Math.sqrt((base*base)+(perp*perp))

// }

// document.write("Hypotenuse ="+ hyp())

// question no 9

// function triangle(a,b){
//     return a*b
// }
// var b = 4
// console.log(triangle(2,b))

// question no 10

// function palindrome(){
// var word=prompt("Enter word")
// var flag="";
// for(var i=word.length-1;i>=0;i--){
//     flag+=word[i]
// }
// if(flag === word){
//     return "yes"
// }
// else{
//     return "no"
// }
// }
// console.log(palindrome())

// question no 11

// function upper(){
//     str = prompt("Enter any Sentences")
//     str = str.split(' ')
//     for(var i=0;i<str.length;i++){
//         str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1) + " "
//         console.log(str[i])
//     }

// }
// upper()

// question no 12

// function findLongestWord(str) {

// var strSplit = str.split(' ');

// var longestWord = 0;

//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }

//     return longestWord;
// }

// alert("Longest Word Has " + findLongestWord("The quick brown fox jumped over the lazydog") + "Letters");

// question no 13


// function identifier(string,letter){
//         var c = 0
//            for(var i = 0; i < string.length; i++){
//                    if(string[i] === letter){
//                         c = c + 1
//                    }
//            }
//            return c
// }
// var s = prompt("Enter string");
// var p = prompt("Enter word which is to be count")
// console.log(identifier(s,p))


// question no 14

// function calcCircumference(radius){
//     return 2*Math.PI*radius
// }
// function calcArea(rad){
//     return Math.round((Math.PI)*rad*rad)
// }
// console.log(calcCircumference(12))
// console.log(calcArea(2))
