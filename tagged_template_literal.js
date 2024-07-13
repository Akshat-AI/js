var num1 = 10, num2 = 20
console.log(`Sum of ${num1} and ${num2} = ${num1+num2}`)
function display(strings,...values){
    console.log(strings[0])
    console.log(strings[1])
    console.log(strings[2])
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])


}

display`Sum of ${num1} and ${num2} is ${num1+num2}`