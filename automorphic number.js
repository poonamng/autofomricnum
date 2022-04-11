
var atmn=require("readline-sync")
var num=atmn.questionInt("enter number:");

square=num**2    
sqlen=square.toString().length

if (square.toString()[sqlen-1]===num.toString()[0]){

 console.log(num,"it is automorphic number.")
}else{
   console.log(num,"it is not automorphic number")
}

//   for squar more than three number 


// var atmn=require("readline-sync")
// var num=atmn.questionInt("enter number:");

// square=num**2    
// sqlen=square.toString().length

// if (square.toString()[sqlen-2]===num.toString()[0]){

//  console.log(num,"it is automorphic number.")
// }else{
//    console.log(num,"it is not automorphic number")
// }


