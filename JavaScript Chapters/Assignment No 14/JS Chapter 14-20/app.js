///////////////Chapter no 14\\\\\\\\\\\\\\\\\
//Question no 1
//  var stdName = []



//wuestion no 2
// var stdName = []


//question no 3 
// var variableaArr = ["Aziz" , "okasha" , "moiz" , "faizan"]



//question no 4
// var numArr = [12, 13, 14, 15, 16]


//question no 5
// var booleanArr = [true, false]


//question no 6
// var mixedArr = ["AbAziz" , 53 , true]


//question no 7
// var qualArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// document.write("<h1>"+"QUALIFACTIONS"+"</h1>");
// document.write("1)" + qualArray[0] + "<br>");
// document.write("2)" + qualArray[1] + "<br>");
// document.write("3)" + qualArray[2] + "<br>");
// document.write("4)" + qualArray[3] + "<br>");
// document.write("5)" + qualArray[4] + "<br>");
// document.write("6)" + qualArray[5] + "<br>");
// document.write("7)" + qualArray[6] + "<br>");
// document.write("8)" + qualArray[7] + "<br>");


//question no 8
// var stdName = ["Abdul Aziz" , "Abdul Moiz " , "Okasha Tanoli"]
// var stdScore = [320,230,480]
// var totalScore = 500
// var percentage1 = stdScore[0]/totalScore*100
// var percentage2 = stdScore[1]/totalScore*100
// var percentage3 = stdScore[2]/totalScore*100

// document.write("score of" + " "  + stdName[0] + " " + "is" + " " + stdScore[0] + " " + "and the Percentage is"+ " " + percentage1 +"%"  + "<br>")
// document.write("score of" + " " + stdName[1] + " " + "is" + " " + stdScore[1] + " " + "and the Percentage is" + " " + percentage2 +"%" + "<br>")
// document.write("score of" + " " + stdName[2] + " " + "is" + " " + stdScore[2] + " " + "and the Percentage is" + " " + percentage3 +"%" + "<br>")



//question no 9

// var colorNames = ["red", "green", "blue", "yellow",]
// document.write(colorNames + "<br>")
//   (a)
// var beginingColor = prompt("Enter a Color Name You want to Add in the Begining")
// colorNames.unshift(beginingColor)
//      document.write(colorNames + "<br>" )
//    (b)
// var endColor = prompt("Enter a Color Name You want to Add in the End")
// colorNames.push(endColor )
//      document.write(colorNames + "<br>")
// (c)
// colorNames.unshift("orange")
// colorNames.unshift("grey")
// document.write(colorNames + "<br>")
//    (d)
// colorNames.shift()
// document.write(colorNames + "<br>")
//  (e)
// colorNames.pop()
// document.write(colorNames)
//  (f)
// var addIndex = +prompt("Which Index You Want to Add A color")
// var addIndexColor = prompt("Which Color You Want to Add")
// colorNames.splice(addIndex, 0, addIndexColor)
// document.write(colorNames + "<br>")
//  (g)
// var deleteIndex = +prompt("Which Index You Want to Delete A color")
// var deleteIndexColor = +prompt("How Many Color You Want to Delete")
// colorNames.splice(deleteIndex,deleteIndexColor)
// document.write(colorNames + "<br>")


// question no 10

// var stdScore = [320,230,480,120]
// document.write("Scores of Students :" + stdScore + "<br>")
// stdScore.sort()
// document.write("Ordered Scores of Students :" + stdScore + "<br>")


// question no 11

// var cities = ["karachi","lahore","islamabad","Queetta","peshawar"]
// document.write("cities list" + cities +"<br>")
// var a=cities.slice(1,4)
// document.write("selected cities list " + a)



// question no 12

// var arr = ["This","is","my","cat"];
// document.write(arr.join() +"<br>");



// question no 13

// var devices = ["keyboard","mouse","printer","monitor"]
// document.write(devices + "<br>")

// question no 14

// var devices = ["keyboard","mouse","printer","monitor"]
// document.write(devices.reverse())



// question no 15

// var companies = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// document.write("<select>")
//     document.write("<option>",companies[0], "</option>" )
//     document.write("<option>",companies[1], "</option>" )
//     document.write("<option>",companies[2], "</option>" )
//     document.write("<option>",companies[3], "</option>" )
//     document.write("<option>",companies[4], "</option>" )
//     document.write("<option>",companies[5], "</option>" )
// document.write("</select>")

















//    CHAPTER NO 17-20
//    CHAPTER NO 17-20
//    CHAPTER NO 17-20


// question no 1

// var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multiArray[0])
// document.write(multiArray[1])
// document.write(multiArray[2])


// question no 3
// for (var i = 0; i <= 10; i++) {
//     document.write(i + "<br>")
// }


// question no 4
// var tableNum = +prompt("Enter the table number")
// var mulLength = +prompt("Enter the table number")

// for (var i = 1; i <=mulLength; i++) {
//     document.write(tableNum + "" + "*" + "" + i + "=" + "" + tableNum * i + "<br>")
// }


//question no 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0 ; i<=fruits.length ; i++){
//     document.write(fruits[i] + "<br>")
// }
// for (var j=0;j<fruits.length;j++){
//         document.write("Element at index" + " " +j+ " " + "is" + " "+fruits[j] + "<br>");
//     }
    



// question no 6
//  document.write("<h1>"+"COUNTING:"+"</h1>")
//  for(var i=1;i<16;i++){
//      document.write(i+",")
//     }
// document.write("<h1>"+"REVERSE COUNTING:"+"</h1>")
// for(var j=10;j>=1;j--){
//     document.write(j+",")

// }
// document.write("<h1>"+"EVEN:"+"</h1>")
// for(var k=0;k<=20;k=k+2){
//       document.write(k+",")
// }
// document.write("<h1>"+"ODD:"+"</h1>")
// for(var l=1;l<=20;l=l+2){
//       document.write(l+",")
// }
// document.write("<h1>"+"SERIES:"+"</h1>")
// for(var m=2;m<=20;m=m+2){
//       document.write(m+"k,")
// }



// question no 7

// var arr=["cake","apple pie","cookie","chips","patties"]
// var input=prompt("Enter Item")
// var flag="yes"
// for(var i=0;i<arr.length;i++){
//     if(input===arr[i]){
//         alert("Element found")
//         var flag="no";

//     }
   
// }
// if(flag==="yes"){
//     alert("Not Found")
// }





// question no 10
// for(var i=1;i<=20;i++){
//     document.write(i*5 + ",")
// }