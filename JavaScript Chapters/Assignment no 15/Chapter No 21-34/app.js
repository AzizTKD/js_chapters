 // CHAPTER NO 21-25
       // CHAPTER NO 21-25
       // CHAPTER NO 21-25

// question no 1

// var firstName = prompt("Enter First Name ")
// var lastName = prompt("Enter Last Name ")
// var fullName = firstName + " " +  lastName
// alert(fullName)

// question no 2

// var userInput = prompt("Enter Your Mobile Phone MOdel")
// var length = userInput.length;
// document.write("My Favourite Phone is" + " " + userInput + "<br>")
// document.write("Length of String is" + " " + length)


// question no 3

// var country = "Pakistan"
// var find = country.indexOf("n")
// document.write("String:" + country + "<br>")
// document.write("Index of n is"+" "+ find)

// question no 4

// var name = "Hello World"
// var lastIndex = name.lastIndexOf("l")
// document.write("String" + " " + name +"<br>")
// document.write("last Index of 'l':" + " " + lastIndex )

// question no 5

// var country = "Pakistani"
// var char = country.charAt(3)
// document.write("String" + " " + country +"<br>")
// document.write("Character at Index 3:"+ " "+ char)

// question no 6

// var firstName = "Talha"
// var lastName = "Rahim"
// var concat = firstName +" " + lastName
// document.write("Hello"+" "+concat)

// question no 7

// var city = "Hyderabad"
// var replacement = city.replace("Hyder","Islam")
// // document.write("City :" + " " + city + "<br />")
// document.write("After replacement :" + " " + replacement)

                //   OR
                
  // var city = "Hyderabad";
// var replacement =""
// for(var i=0 ; i < city.length; i++){
//         if(city.slice(i,i+5) === "Hyder"){
//                 replacement = "Islam" + city.slice(i+5)
//         }
// }
// document.write("City :" + " " + city + "<br />")
// document.write("After replacement :" + " " + replacement)

// question no 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g,"&")
// alert(replace)

// question no 9

// var string = "472"
// document.write("Value:" + " " + string + "<br>")
// document.write("Type:" + " " + typeof string + "<br>")
// var num = parseInt("472")
// document.write("Value:" + " " + num + "<br>" )
// document.write("Type:" + " " + typeof num)

// question no 10

// var userInput = prompt("Enter any Words")
// document.write("user input:"+" "+ userInput + "<br>")
// document.write("Upper case:"+" "+ userInput.toUpperCase())

// question no 11

// var userInput = prompt("Enter Words")
// var firstCapital = userInput.slice(0,1)
// var secondJoin = userInput.slice(1)
// firstCapital = firstCapital.toUpperCase()
// var titleCase =  firstCapital + secondJoin

// document.write("User Input:" + " " + userInput + "<br>")
// document.write("Title Case:" + " " + titleCase)

// question no 12

// var num = 35.36
// var str = num.toString()
// var remove1 = str.slice(0,2)
// var remove2 = str.slice(3)
// var join = remove1 + remove2
// alert(join)





                    // CHAPTER NO 25-30
                    // CHAPTER NO 25-30
                    // CHAPTER NO 25-30

// question no 1

// var userInput = +prompt("Enter Positive Number")
// document.write("Number"+" "+userInput + "<br>")
// document.write("Round Off Value :"+" "+Math.round(userInput) + "<br>")
// document.write("Floor Value :"+" "+Math.floor(userInput) + "<br>")
// document.write("Ceil Value :"+" "+Math.ceil(userInput) + "<br>")

// question no 2

// var userInput = +prompt("Enter Negative Number")
//  document.write("Number"+" "+userInput + "<br>")
//  document.write("Round Off Value :"+" "+Math.round(userInput) + "<br>")
//  document.write("Floor Value :"+" "+Math.floor(userInput) + "<br>")
//  document.write("Ceil Value :"+" "+Math.ceil(userInput) + "<br>")

// question no 3

// var num = +prompt("Enter negative number");
// if(num<0){
//     document.write("The absolute value of " + " " + num + " " + "is" + " "+ (num+-num*2))
// }

// question no 4

// var mathRandom = Math.random()*6;
// var round = Math.round(mathRandom);
// document.write("Random Dice Value :" + " " + round)

// question no 5

// var coin = Math.random()*2
// var round = Math.round(coin)
// if(round === 2){
//     document.write("Head")
// }else{
//     document.write("Tail")
// }

// question no 6

// var num = Math.random()*100
// var round = Math.round(num)
// document.write("Random number Between 1 & 100 is" + " "+ round)

// question no 7

// var userInput =parseInt(prompt(("Enter your weight")))
// document.write("The weight of User is"+" "+userInput+" "+"Kilogram")


// question no 8

// var secretNum = Math.random()*10
// var round = Math.round(secretNum)
// var userInput = +prompt("Enter a Number between 1 to 10")
// if(round === userInput){
//     alert("congratulation")
// }else{
//     alert("Try Again")
// }










            //   CHAPTER NO 31-34
            //   CHAPTER NO 31-34
            //   CHAPTER NO 31-34

// question no 1

// var date = new Date()
// console.log(date)

// question no 2

// var date = new Date()
// var months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// var getMonth = date.getMonth()
// console.log(months[getMonth])

// question no 3

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var date = new Date()
// var todayDay = date.getDay()
// console.log("Today is " + days[todayDay])
//               OR
// var currentDay = new Date();
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// question no 4

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var date = new Date()
// var todayDay = date.getDay()
// var currentDay = (days[todayDay])
// console.log(currentDay)
// if(currentDay ==="Sunday"){
//     console.log("It's Fun Day")
// }else{
//     console.log("It's Working Day")
// }

// question no 5

// var date = new Date()
// console.log(date.getDate())
// if(date <= 15){
//     console.log("First fifteen days of the month")
// }else if(date >= 16){
//     console.log("Last days of the month")
// }

// question no 6

// var date = new Date()
// var miliSec = date.getTime()
// var minutes = miliSec/1000*60
// document.write("Current Date:"+" "+date+ "<br>")
// document.write("Elapsed Millisecond Since Jan 1 1970:"+" "+miliSec+"<br>")
// document.write("Elapsed Minutes Since Jan 1 1970:"+" "+minutes+"<br>")

// question no 7

// var date = new Date()
// var time = date.getHours()
// console.log(time)
// if(time < 12){
//    console.log("AM")
// }else{
//     console.log("PM")
// }

// question no 8

// var date = new Date("Dec 31 2020")
// console.log("Later Date:"+" "+date)

// question no 9

// var todayDate = new Date()
// var ramadanDate = new Date("March 23 2023")
// var diff = todayDate - ramadanDate 
// var total = Math.ceil(diff/(1000*60*60*24))
// document.write(total +" "+"Days have  passed since 1st Ramadan 2022")

// question no 10

// var newDate = new Date().getSeconds()
// var startDate = new Date("jan 1 2022")
// var diff = startDate - newDate 
// var total = Math.ceil(diff/(1000*60*60*24))
// document.write(total +" "+"Sec had  passed since 1st jan 2022")


// question no 11

// var date = new Date()
// var newDate = new Date()
// newDate.setHours(newDate.getHours()-1)
// document.write("Current Date:"+" "+date+"<br>")
// document.write("1 Hour Ago it was"+" "+newDate)


// question no 12

// var date = new Date()
// alert("current date:"+" "+date)
// var back = new Date()
// back.setFullYear(back.getFullYear()-100)
// alert("100 years")

// question no 13

// var userInput = +prompt("Enter Your Age")
// var currentYear = new Date().getFullYear()
// var ageYear = currentYear - userInput
// alert("Your Birth Year is" +" "+ ageYear)
