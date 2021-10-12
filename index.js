//1
function sumOfThreeAndFive(){
    let sum = 0
  for (let i = 0; i < 1000; i ++){
      if (i%3 === 0 || i%5 === 0)
     sum += i
  } return sum
}
// console.log(sumOfThreeAndFive())

function greaterNum(num1, num2){
    if ( num1 === num2){
        return "both integers are equal"
    }else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return null
    }else {
        return Math.max(num1, num2)
    }
  
}
console.log(greaterNum(12,"12"))

function oddAndEvenInFifteen(){
  
}

function sortThreeNums(){
  
}






