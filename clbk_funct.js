function calcSum(num1,num2,result){
    let add = num1+ num2
    result(`Sum of two numbers is =${add}`)
 
}
function result(info){
    console.log(info)
}
calcSum(23,45,result)